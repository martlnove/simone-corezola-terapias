document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href*="api.whatsapp.com"], a[href*="wa.me"]');
    if (!link) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'whatsapp_click',
        cta_origem: link.dataset.ctaOrigem || 'nao-definido',
        cta_produto: link.dataset.ctaProduto || 'geral'
    });
});
