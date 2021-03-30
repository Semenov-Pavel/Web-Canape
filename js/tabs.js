(function() {
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.tabs-btn').forEach(function(tabsBtn) {
            tabsBtn.addEventListener('click', function(event) {
                const path = event.currentTarget.dataset.path

                document.querySelectorAll('.tab-content').forEach(function(tabContent) {
                    tabContent.classList.remove('tab-content-active')
                })

                document.querySelectorAll('.tabs-btn').forEach(function(Btn) {
                    Btn.classList.remove('tab-btn-active')
                })

                document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
                document.querySelector(`[data-path="${path}"]`).classList.add('tab-btn-active')
            })
        })
    })
})();