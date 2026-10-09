const evidence = require('./coaching-evidence.json');
const providers = evidence.providers;
const date = '8 October 2026';
const cities = require('./cities');
const cityName = slug => cities.find(c => c.slug === slug)?.name || slug;
const source = c => [c.name + ' official course information', c.sourceUrls[0]];
const priceRows = c => c.offers.map(o => [o.name, o.kind, o.price, o.tax, {label:'Official price source',href:o.url}]);
const prices = items => ({id:'fees',heading:'Named packages and fee evidence',paragraphs:['Prices checked on '+date+'. Different product types are not equivalent: a test series does not include a full teaching course. Displayed discounts can change. Confirm the final invoice, access expiry and refund terms before payment.'],table:{headers:['Package','Product type','Displayed price / calculated total','Tax / qualification','Source'],rows:items.flatMap(c=>c.offers.length?priceRows(c):[[c.name,'Package requires confirmation','Not verified','Request an itemised written quote',{label:'Official source',href:c.sourceUrls[0]}]])}});
const centreSection = entries => ({id:'centres',heading:'Selected official centre listings',paragraphs:['Official pages checked on '+date+'. These are selected listings, not a complete local directory or a quality ranking. Call before travelling: an address does not confirm that a new CAT 2026 batch has seats.'],table:{headers:['Provider / area','Address','Contact','Source'],rows:entries.map(x=>[x.name+' — '+x.area,x.address,x.phone||'Use official contact page',{label:'Official centre source',href:x.source}])}});
const method = 'Provider pages establish advertised products and locations, not teaching quality or student outcomes. We have not independently tested these courses. Listings are alphabetical; there is no numerical score or paid-feature slot in this comparison layout. CATPrep 2026 has no commercial partnerships, as confirmed by the site owner on 9 October 2026. Coverage is informed by learner feedback received through different channels. This feedback reflects individual experiences and is not a representative survey or an independently verified review dataset. Official sources are used to check course facts.';
function localPage(p){
 const bits=p.slug.split('/'); const city=bits[1], id=bits[2];
 const entries=evidence.centres.filter(x=>x.city===city&&x.id===id);
 if(!entries.length) throw new Error('Missing centre evidence: '+p.slug);
 if(p.verifiedResearch) return p;
 const c=providers.find(x=>x.id===id); const name=entries[0].name;
 let extra=[];
 if(id==='gradsquare')extra=[{id:'fees',heading:'CAT 2026 course price',paragraphs:['GradSquare lists its CAT 2026 classroom and online courses at ₹45,000 plus 18% GST, giving a calculated total of ₹53,100 each. Personalised tuition is price on request. These are teaching-course prices, not mock-only fees.'],links:[['Official course and price page',entries[0].source]]}];
 else if(c)extra=[prices([c])];
 else extra=[{heading:'Fee verification',paragraphs:['A current fee for the specific CAT classroom batch was not verified. Ask for a written total including taxes, materials, mocks and access duration.']}];
 return {slug:p.slug,section:cityName(city)+' coaching research',title:name+' '+cityName(city)+': CAT Centres, Course Fees and Batch Checks',description:'Official centre details and course evidence for '+name+' in '+cityName(city)+', checked '+date+'.',updated:'2026-10-08',answer:name+' has an official CAT-related listing in '+cityName(city)+'. Use the location below to enquire about a specific teaching batch, then compare its schedule, total cost and travel time.',body:[method],sections:[centreSection(entries),...(c?[{heading:'Course scope and limits',paragraphs:[c.summary,c.limitation]}]:[]),...extra,{id:'visit',heading:'What to confirm at this branch',list:['Ask who teaches QA, DILR and VARC in the batch you would join; attend a class with those teachers.','Obtain the remaining live timetable and a catch-up plan for lessons already completed.','Confirm whether doubts are handled at this branch, online, or only at set times.','Test the commute at class time and ask whether missed classes have recordings.','Get full-length CAT mock counts separately from sectional tests and other MBA-exam tests.']},{heading:'Compare nearby options',links:[['All researched '+cityName(city)+' options','/cat-coaching/'+city+'/'],...(c?[[name+' national profile','/cat-coaching/'+id+'/']]:[])]}],sourceNotes:['Official source review: '+date+'. Branch service quality and current seat availability have not been independently verified.'],sourceLinks:entries.map(x=>[x.name+' '+x.area,x.source]),faqs:[{q:'Does the quoted national fee apply to this branch?',a:'Only a written branch quote establishes the classroom fee. National test-series and self-study prices are different products.'},{q:'Is this a ranking of '+name+'?',a:'No. This page documents the source, location and enrolment checks; it does not assign a quality score.'}]};
}
const comparisonOnly={
 'mba-pathshala':{id:'mba-pathshala',name:'MBA Pathshala',mode:'online',summary:'MBA Pathshala lists CAT and other MBA entrance preparation, mentoring and mocks.',limitation:'The homepage mixes 2027 batch headings with 2026 references; confirm the exam year and access period.',bestFor:['Ask for the current batch timetable and exam year'],offers:[],sourceUrls:['https://www.mbapathshala.com/']},
 'aarambh-academy':{id:'aarambh-academy',name:'Aarambh Academy',mode:'online',summary:'Aarambh advertises CAT 2026 live classes, recordings and mentoring.',limitation:'Ask which mock provider and exact test package are included; partnership claims alone do not establish course quality.',bestFor:['Verify live teaching and included mock access'],offers:[],sourceUrls:['https://www.aarambhacademy.com/']}
};
const groups={
 'rodha-vs-cracku':['rodha','cracku'],
 'career-launcher-vs-time-vs-ims':['career-launcher','time','ims'],
 'elites-grid-vs-iquanta':['elites-grid','iquanta'],
 'mba-pathshala-vs-aarambh-academy':['mba-pathshala','aarambh-academy'],
 'alchemist-vs-hitbullseye':['alchemist','hitbullseye'],
 'cracku-vs-2iim':['cracku','2iim'],
 'iquanta-vs-cracku-vs-rodha':['iquanta','cracku','rodha'],
 'rodha-vs-elites-grid-vs-hitbullseye':['rodha','elites-grid','hitbullseye'],
 'rodha-vs-iquanta':['rodha','iquanta'],
 'iquanta-vs-catking':['iquanta','catking'],
 'catking-vs-rodha':['catking','rodha'],
 'unacademy-cat-vs-mba-wallah':['unacademy-cat','pw-mba'],
 'ims-vs-rodha':['ims','rodha'],
 'cracku-vs-rodha-vs-hitbullseye':['cracku','rodha','hitbullseye'],
 'catking-vs-rodha-vs-2iim':['catking','rodha','2iim'],
 'rodha-vs-mba-pathshala-vs-aarambh-academy':['rodha','mba-pathshala','aarambh-academy']
};
function comparison(p,ids){
 const items=ids.map(id=>providers.find(c=>c.id===id)||comparisonOnly[id]).sort((a,b)=>a.name.localeCompare(b.name));
 const names=items.map(c=>c.name).join(' vs ');
 return {slug:p.slug,section:'CAT coaching comparison',title:names+': CAT 2026 Courses, Fees and Trade-offs',description:'Compare named products, delivery modes and evidence gaps for '+names+'. Reviewed '+date+'.',updated:'2026-10-08',answer:'Choose between '+names+' by the course you will actually attend. The evidence below identifies delivery options and package differences; it does not establish a universal winner.',body:[method],sections:[{id:'comparison',heading:'What differs between these options',table:{headers:['Provider','Delivery','Useful decision question','Evidence limit'],rows:items.map(c=>[c.name,c.mode,c.bestFor[0],c.limitation])}},...items.map(c=>({id:c.id,heading:c.name+': course fit and limitations',paragraphs:[c.summary,'Consider this option when you can resolve this question: '+c.bestFor[0]+'.',c.limitation],links:[source(c),...(providers.includes(c)?[[c.name+' detailed profile','/cat-coaching/'+c.slug+'/']]:[])]})),prices(items),{id:'decision',heading:'Make the decision with the same trial task',paragraphs:['Watch one current lesson on the same topic from each shortlisted provider, then attempt ten unseen questions without help. Record what you understood, which doubts remain and whether the explanation helped you correct them. This is a personal fit check, not a controlled measure of provider effectiveness.'],list:['If most concepts are new, ask for a complete teaching and revision plan; a late crash course may assume prior study.','If concepts are already covered, compare the test platform and analysis tools before paying for another full course.','For classroom delivery, evaluate the named branch and teachers, not only the national brand.','Compare the full payable amount for equivalent packages, including taxes, books and mock access.','Get recording expiry, response channels and refund conditions in writing.']}],sourceNotes:['Source pages checked '+date+'. Prices and course availability can change; provider claims are attributed and outcomes are not independently audited.'],sourceLinks:items.map(source),faqs:[{q:'Which provider is best for everyone?',a:'These sources do not establish that one provider is best for all students. Use your learning gaps, timetable, trial lesson and written package inclusions to decide.'},{q:'Can I compare the cheapest advertised prices directly?',a:'No. A section course, test series, crash course and comprehensive programme cover different needs. Compare the same product type and total payable price.'}]};
}
function prepareEvidencePages(pages){return pages.map(p=>{
 if(p.slug.match(/^cat-coaching\/[^/]+\/[^/]+$/)&& !p.slug.startsWith('cat-coaching/rodha/'))return localPage(p);
 const match=p.slug.match(/^blog\/best-cat-coaching-in-(mumbai|chennai|kolkata|ahmedabad)$/);
 if(match){const city=match[1];return {...p,title:'CAT Coaching in '+cityName(city)+': Verified Locations and Comparison Checklist',description:'Research selected official CAT classroom locations in '+cityName(city)+'.',answer:'Start with a confirmed local CAT listing, then compare the actual batch and commute. Online availability alone is not evidence of a physical centre.',updated:'2026-10-08',body:[method],sections:[centreSection(evidence.centres.filter(x=>x.city===city)),{heading:'Compare teaching and total cost',paragraphs:['Ask each branch for the named teachers, remaining syllabus, weekly timetable and a tax-inclusive quote. Book a visit during the time you would travel for classes. Treat test-only fees separately from teaching programmes.'],links:[['Full '+cityName(city)+' city guide','/cat-coaching/'+city+'/'],['Online alternatives','/cat-coaching/online/']]}],faqs:[],sourceNotes:['Reviewed '+date+'. Selected locations; not an exhaustive ranking.'],sourceLinks:[]};}
 for(const [key,ids] of Object.entries(groups))if(p.slug==='blog/'+key+'-cat-2026')return comparison(p,ids);
 if(p.slug==='blog/best-cat-online-coaching-2026')return {...comparison(p,providers.filter(c=>c.active&&c.courseTypes.includes('online')).map(c=>c.id)),title:'Online CAT Coaching 2026: Course Types, Fees and Evidence',description:'An alphabetical comparison of online CAT preparation options with named products and source limitations.',answer:'Compare online preparation by teaching format, course scope and the support included in your package. There is no evidence-backed universal winner in this directory.'};
 return p;
});}
module.exports={prepareEvidencePages,centreSection,prices,method};
