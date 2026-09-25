const btn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
if(btn){btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)})}
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
// Contact form: client-side validation (demo — nothing is sent)
const form=document.querySelector('#contact-form');
if(form){
  const rules={
    name:v=>v.trim().length>1||'Enter your full name.',
    email:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)||'Enter an email like name@company.com.',
    service:v=>v!==''||'Choose the service you need.',
    message:v=>v.trim().length>=20||'Add a little more detail — at least 20 characters.'
  };
  const check=el=>{const r=rules[el.name];if(!r)return true;const res=r(el.value);const f=el.closest('.field');
    if(res===true){f.classList.remove('invalid');el.removeAttribute('aria-invalid');return true}
    f.classList.add('invalid');el.setAttribute('aria-invalid','true');f.querySelector('.err').textContent=res;return false};
  form.querySelectorAll('[name]').forEach(el=>el.addEventListener('blur',()=>check(el)));
  form.addEventListener('submit',e=>{e.preventDefault();
    const ok=[...form.querySelectorAll('[name]')].map(check).every(Boolean);
    if(!ok){form.querySelector('[aria-invalid=true]').focus();return}
    const msg=document.querySelector('.form-ok');msg.querySelector('b').textContent=form.elements.name.value.trim().split(' ')[0];
    msg.classList.add('show');form.reset();msg.focus();});
}
