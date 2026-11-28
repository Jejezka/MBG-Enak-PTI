let mode = 'home', reg = 'all', modal = new bootstrap.Modal(foodModal);
const render = () => {
    const q = search.value.toLowerCase().trim(), home = mode === 'home' && !q; let ada = 0;
    [aboutSec, catalogSec, regionNav, resepInfo, rekSec, provSec].forEach((e, i) => e.classList.toggle('d-none', [mode !== 'about', mode === 'about', home || mode === 'about', mode !== 'resep', !home, home][i]));
    document.querySelectorAll('#provSec .prov-group').forEach(s => { let n = 0; s.querySelectorAll('.col').forEach(c => { const k = c.querySelector('.kotak'), ok = (!['berat', 'ringan'].includes(mode) || k.dataset.type === mode) && (reg === 'all' || k.dataset.loc.startsWith(reg)) && (k.innerText + k.dataset.loc).toLowerCase().includes(q); c.classList.toggle('d-none', !ok); if (ok) n++, ada++; }); s.classList.toggle('d-none', !n); });
    emptyMsg.classList.toggle('d-none', home || ada > 0);
};
document.querySelectorAll('.nav-btn, .reg-btn').forEach(b => b.onclick = () => { const nav = b.classList.contains('nav-btn'); document.querySelectorAll(nav ? '.nav-btn' : '.reg-btn').forEach(x => x.classList.remove('active')); b.classList.add('active'); nav ? mode = b.dataset.nav : reg = b.dataset.reg; render(); });
search.oninput = render;
document.querySelectorAll('.kotak').forEach(k => k.onclick = () => { [mImg.src, mTag.textContent, mStar.textContent, mTitle.textContent, mDesc.textContent, mBahan.textContent, mCara.textContent] = [k.querySelector('img').src, k.dataset.loc, k.dataset.star, k.querySelector('.nama-makanan').textContent, k.dataset.desc, k.dataset.bahan, k.dataset.cara]; resepWrap.classList.toggle('d-none', mode !== 'resep'); resepBox.classList.add('d-none'); modal.show(); });