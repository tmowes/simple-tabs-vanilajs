const $ = document.querySelector.bind(document);

function TabNavigation() {
  const html = {
    links: [...$('.tab-links').children],
    contents: [...$('.tab-contents').children],
    openTab: $('[data-open]'),
  };
  function hideAllTabContent() {
    html.contents.forEach(section => {
      section.style.display = 'none';
    });
  }
  function removeAllActiveClass() {
    html.links.forEach(tab => {
      tab.className = tab.classList.remove('active');
    });
  }
  function showCurrentTab(id) {
    const tabcontent = $('#' + id);
    tabcontent.style.display = 'block';
  }
  function selectTab(event) {
    hideAllTabContent();
    removeAllActiveClass();
    const target = event.currentTarget;
    showCurrentTab(target.dataset.id);
    target.classList.add('active');
  }
  function listenForChanges() {
    html.links.forEach(tab => {
      tab.addEventListener('click', selectTab);
    });
  }
  function init() {
    hideAllTabContent();
    listenForChanges();
    html.openTab.click();
  }
  return {
    init,
  };
}
window.addEventListener('load', () => {
  const tabNavigation = TabNavigation();
  tabNavigation.init();
});
