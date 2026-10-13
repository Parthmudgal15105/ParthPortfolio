
(() => {
  'use strict';
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  const themeButton=document.getElementById('themeToggle');
  themeButton.addEventListener('click',()=>{document.body.classList.toggle('light');themeButton.textContent=document.body.classList.contains('light')?'☾':'☼';});
  const menu=document.getElementById('menuToggle'),links=document.getElementById('navlinks');
  menu.addEventListener('click',()=>{const show=!links.classList.contains('active');links.classList.toggle('active',show);menu.setAttribute('aria-expanded',String(show));});
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('active');menu.setAttribute('aria-expanded','false');}));
  const dlg=document.getElementById('demoDialog'),content=document.getElementById('modalContent');
  const title=document.getElementById('modalTitle'),tag=document.getElementById('modalTag');
  document.getElementById('closeDialog').addEventListener('click',()=>dlg.close());
  dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
  document.querySelectorAll('[data-demo]').forEach(btn=>btn.addEventListener('click',()=>openDemo(btn.dataset.demo)));
  // All rows below are fictional and are used only to illustrate review logic.
  const deals=[
    {account:'Northstar Retail',month:'2026-10',forecast:'Commitment',top:true,acv:12,status:'Clean'},
    {account:'Bluebird Foods',month:'2026-10',forecast:'Upside',top:true,acv:8,status:'Clean'},
    {account:'Evergreen Commerce',month:'2026-10',forecast:'Unclassified',top:true,acv:4,status:'Missing forecast category'},
    {account:'Northstar Retail',month:'2026-10',forecast:'Upside',top:true,acv:6,status:'Duplicate account review'},
    {account:'Cobalt Services',month:'2026-10',forecast:'Commitment',top:false,acv:5,status:'Outside priority deals'},
    {account:'Atlas Logistics',month:'2026-11',forecast:'Commitment',top:true,acv:14,status:'Clean'},
    {account:'Pinecone Digital',month:'2026-11',forecast:'Upside',top:true,acv:7,status:'Clean'},
    {account:'Atlas Logistics',month:'2026-11',forecast:'Upside',top:true,acv:3,status:'Duplicate account review'},
    {account:'Birch Retail',month:'2026-12',forecast:'Commitment',top:true,acv:11,status:'Clean'},
    {account:'Lumen Manufacturing',month:'2026-12',forecast:'Upside',top:true,acv:9,status:'Stale record review'},
    {account:'Marigold Tech',month:'2026-12',forecast:'Commitment',top:true,acv:5,status:'Clean'}
  ];
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const months={'2026-10':'October 2026','2026-11':'November 2026','2026-12':'December 2026'};
  function revenueMarkup(){
    return `<p class="explain">A simplified view of how a weekly SFDC export could be translated into monthly review metrics, based on priority-deal filtering and exception checks.</p>
    <div class="notice">SIMULATED DEMO · Fictional company names and figures. This is not connected to Airtel or live Salesforce data, and is not a verified production model.</div>
    <div class="demo-controls"><div class="field"><label for="monthSelect">Forecast month</label><select id="monthSelect"><option value="2026-10">October 2026</option><option value="2026-11">November 2026</option><option value="2026-12">December 2026</option></select></div><div class="field"><label for="dealCategory">Forecast category</label><select id="dealCategory"><option value="All">All categories</option><option value="Commitment">Commitment</option><option value="Upside">Upside</option><option value="Unclassified">Unclassified</option></select></div></div>
    <div class="demo-kpis"><div class="demo-kpi"><small>Priority opportunities</small><b id="priorityValue">—</b></div><div class="demo-kpi"><small>Priority ACV (₹ mn)</small><b id="acvValue">—</b></div><div class="demo-kpi"><small>Records to review</small><b id="flagValue">—</b></div></div>
    <div class="table-scroll"><table class="data-table"><thead><tr><th>Account</th><th>Month</th><th>Category</th><th>ACV ₹ mn</th><th>Review result</th></tr></thead><tbody id="dealRows"></tbody></table></div>
    <p class="extra-links">Sample rules: include Top Deal = 1 for the selected month; flag unclassified opportunities and possible duplicate account entries. Amounts are illustrative ACV, not recognized revenue.</p>`;
  }
  function updateRevenue(){const month=document.getElementById('monthSelect').value,category=document.getElementById('dealCategory').value;
    const rows=deals.filter(d=>d.top&&d.month===month&&(category==='All'||d.forecast===category));
    const total=rows.reduce((sum,r)=>sum+r.acv,0);const flags=rows.filter(r=>r.status!=='Clean').length;
    document.getElementById('priorityValue').textContent=String(rows.length);
    document.getElementById('acvValue').textContent=total.toFixed(1);
    document.getElementById('flagValue').textContent=String(flags);
    document.getElementById('dealRows').innerHTML=rows.length?rows.map(r=>`<tr><td>${esc(r.account)}</td><td>${esc(months[r.month])}</td><td>${esc(r.forecast)}</td><td>${r.acv.toFixed(1)}</td><td><span class="status ${r.status==='Clean'?'':'warn'}">${esc(r.status)}</span></td></tr>`).join(''):'<tr><td colspan="5">No matching records in the sample.</td></tr>';
  }
  const scenarios=[
    {key:'nfs',question:'Can a file share be mounted using NFSv4?',coverage:'Partially Covered',title:'File storage access',evidence:'Example document mentions NFS mounting but does not state the supported protocol versions.',next:'Ask the storage SME to confirm supported NFS versions and mounting prerequisites.'},
    {key:'backup',question:'Does a database backup use snapshots or continuous streaming?',coverage:'Requires SME Validation',title:'Database backup mechanisms',evidence:'Example guide states that scheduled backup is available but does not describe the underlying backup method.',next:'Request backup architecture, consistency guarantees and restore-time behavior.'},
    {key:'quota',question:'Where do users view storage quotas?',coverage:'Covered',title:'Quota visibility',evidence:'Example guide explicitly describes the usage and quota dashboard in the storage console.',next:'Record evidence and mark as documented; review only if the guide changes.'}
  ];
  function coverageMarkup(){return `<p class="explain">Explore the proposed customer-question coverage review. The intended workflow retrieves documentation evidence, suggests a classification and prepares an SME follow-up for human review.</p><div class="notice">ILLUSTRATIVE DECISION LOGIC · Preset examples only. This is not a live RAG model or an API-connected agent. Evidence snippets are fictional placeholders, not product documentation.</div><div class="demo-controls"><div class="field"><label for="questionSelect">Select an example customer question</label><select id="questionSelect">${scenarios.map(s=>`<option value="${s.key}">${esc(s.question)}</option>`).join('')}</select></div></div><div id="coverageResult" class="reviewbox" aria-live="polite"></div><p class="extra-links">Proposed review states: Covered · Partially Covered · Not Covered · Ambiguous · Requires SME Validation · Conflicting. Reviewer approval remains required.</p>`}
  function updateCoverage(){const s=scenarios.find(x=>x.key===document.getElementById('questionSelect').value)||scenarios[0];const cls=s.coverage==='Covered'?'':s.coverage==='Partially Covered'?'soft':'warn';document.getElementById('coverageResult').innerHTML=`<span class="status ${cls}">${esc(s.coverage)}</span><h4>${esc(s.title)}</h4><p><b style="color:var(--text)">Example evidence:</b> ${esc(s.evidence)}</p><p><b style="color:var(--text)">Suggested next step:</b> ${esc(s.next)}</p><p style="font-size:11px;margin-top:15px">Evidence source: fictional demonstration passage · Status: pending reviewer decision</p>`}
  function retailMarkup(){return `<p class="explain">A retail data analysis case focused on turning high-volume transaction records into decision-ready reporting through Advanced Excel and Power Query.</p><div class="notice">Case-study summary; no source dataset or original workbook is hosted in this public portfolio.</div><div class="reviewbox"><h4>Analytics workflow</h4><ol class="check-list"><li><b>Prepare:</b> Clean transaction records and check categories, duplicates and missing values.</li><li><b>Transform:</b> Use Power Query and calculated columns for reporting-ready fields.</li><li><b>Explore:</b> Summarize revenue, product and customer trends through Pivot Tables.</li><li><b>Communicate:</b> Present slicer-driven KPIs and identify actionable patterns for stakeholders.</li></ol></div><p class="extra-links">Stack: Advanced Excel · Power Query · Pivot Tables · KPI dashboarding.</p>`}
  function openDemo(which){if(which==='revenue'){tag.textContent='INTERACTIVE DEMO / 01';title.textContent='Revenue Review Automation';content.innerHTML=revenueMarkup();document.getElementById('monthSelect').addEventListener('change',updateRevenue);document.getElementById('dealCategory').addEventListener('change',updateRevenue);updateRevenue();}
    else if(which==='coverage'){tag.textContent='INTERACTIVE DEMO / 02';title.textContent='Documentation Coverage Review';content.innerHTML=coverageMarkup();document.getElementById('questionSelect').addEventListener('change',updateCoverage);updateCoverage();}
    else {tag.textContent='CASE STUDY / 03';title.textContent='Retail Transaction Analysis';content.innerHTML=retailMarkup();}
    dlg.showModal();document.getElementById('closeDialog').focus();}
})();
