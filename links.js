window.addEventListener('load', function createlist() {
  // console.log('I WAS HEREEEEE')
  let sites = [
    'http://www.1chronic.com',
    'http://www.69pot.com',
    'http://www.alphabisabolol.com',
    'http://www.baltimorebud.com',
    'http://www.baltimorecityweed.com',
    'http://www.beachherb.com',
    'http://www.bellevueweed.com',
    'http://www.biggiesmallsmarijuana.com',
    'http://www.biggiesmallsstrain.com',
    'http://www.biggiesmallsweed.com',
    'http://www.biggiestrain.com',
    'http://www.blackberrybud.com',
    'http://www.bobdylancannabis.com',
    'http://www.bobdylanstrain.com',
    'http://www.bobmarleystrain.com',
    'http://www.bobmarleyweed.com',
    'http://www.boyntonbeachweed.com',
    'http://www.bradpittcannabis.com',
    'http://www.brazilweed.com',
    'http://www.brotherlylovebud.com',
    'http://www.brotherlylovemarijuana.com',
    'http://www.brotherlyloveweed.com',
    'http://www.budinfusion.com',
    'http://www.budliquor.com',
    'http://www.budmixers.com',
    'http://www.budresin.com',
    'http://www.budshipping.com',
    'http://www.budsour.com',
    'http://www.budvineyard.com',
    'http://www.budvodka.com',
    'http://www.cannabigrowtents.com',
    'http://www.cannabisml.com',
    'http://www.caorganicweed.com',
    'http://www.charmcityweed.com',
    'http://www.cheechnchongstrain.com',
    'http://www.chongcannabis.com',
    'http://www.chongweed.com',
    'http://www.chroniccocktail.com',
    'http://www.clearwaterweed.com',
    'http://www.coorganicweed.com',
    'http://www.dareefer.com',
    'http://www.delta3carene.com',
    'http://www.deorganicweed.com',
    'http://www.drdrestrain.com',
    'http://www.dylancannabis.com',
    'http://www.eeweed.com',
    'http://www.emeraldcitybud.com',
    'http://www.emeraldcityweed.com',
    'http://www.florganicweed.com',
    'http://www.gagacannabis.com',
    'http://www.gagamarijuana.com',
    'http://www.gagastrain.com',
    'http://www.ganjasour.com',
    'http://www.gaorganicweed.com',
    'http://www.giganticweed.com',
    'http://www.growweedplant.com',
    'http://www.hampshirecannabis.com',
    'http://www.hampshiremarijuana.com',
    'http://www.hampshireweed.com',
    'http://www.hedonismmarijuana.com',
    'http://www.hedonismthc.com',
    'http://www.hedonismweed.com',
    'http://www.helpgrowweed.com',
    'http://www.herbsour.com',
    'http://www.honeydewweed.com',
    'http://www.hstcannabis.com',
    'http://www.hstmarijuana.com',
    'http://www.hststrain.com',
    'http://www.huntersthompsonmarijuana.com',
    'http://www.huntersthompsonstrain.com',
    'http://www.huntersthompsonweed.com',
    'http://www.italythc.com',
    'http://www.jaleelahmad.com',
    'http://www.jaleelahmadcush.com',
    'http://www.jaleelahmadstrain.com',
    'http://www.jaleelahmadweed.com',
    'http://www.jaleelwhitecannabis.com',
    'http://www.jaleelwhitemarijuana.com',
    'http://www.jaleelwhitestrain.com',
    'http://www.jaleelwhiteweed.com',
    'http://www.jayzmarijuana.com',
    'http://www.jayzstrain.com',
    'http://www.jerrygarciamarijuana.com',
    'http://www.jerrygarciastrain.com',
    'http://www.jimihendrixstrain.com',
    'http://www.jjweed.com',
    'http://www.kaneweed.com',
    'http://www.kingedibles.com',
    'http://www.kissimmeeweed.com',
    'http://www.ladygagacannabis.com',
    'http://www.ladygagamarijuana.com',
    'http://www.ladygagastrain.com',
    'http://www.laneweed.com',
    'http://www.lilwaynestrain.com',
    'http://www.magiccitybud.com',
    'http://www.marijuanahall.com',
    'http://www.marijuanasaloon.com',
    'http://www.mdorganicweed.com',
    'http://www.milehighbud.com',
    'http://www.mileycyruscannabis.com',
    'http://www.mileycyrusmarijuana.com',
    'http://www.mileycyrusstrain.com',
    'http://www.mileycyrusweed.com',
    'http://www.mjterpenes.com',
    'http://www.naplesweed.com',
    'http://www.ncorganicweed.com',
    'http://www.nebraskapot.com',
    'http://www.neworleansbud.com',
    'http://www.niagarafallsweed.com',
    'http://www.organicweedca.com',
    'http://www.organicweedde.com',
    'http://www.organicweedfl.com',
    'http://www.organicweedga.com',
    'http://www.organicweedpa.com',
    'http://www.organicweedsc.com',
    'http://www.organicweedtx.com',
    'http://www.organicweedva.com',
    'http://www.organicweedvt.com',
    'http://www.ozofweed.com',
    'http://www.paorganicweed.com',
    'http://www.petersburgweed.com',
    'http://www.pineberryweed.com',
    'http://www.plainsweed.com',
    'http://www.potgay.com',
    'http://www.potlgbtq.com',
    'http://www.potlube.com',
    'http://www.potmixer.com',
    'http://www.potraffle.com',
    'http://www.potsweet.com',
    'http://www.ppweed.com',
    'http://www.purpleurkelstrain.com',
    'http://www.rihannacannabis.com',
    'http://www.rihannastrain.com',
    'http://www.rihannaweed.com',
    'http://www.riverherb.com',
    'http://www.rrweed.com',
    'http://www.russiaweed.com',
    'http://www.santaclaraweed.com',
    'http://www.schumersoon.com',
    'http://www.schumerweed.com',
    'http://www.sdafabric.com',
    'http://www.sethrogancannabis.com',
    'http://www.sethroganmarijuana.com',
    'http://www.sethroganweed.com',
    'http://www.sinedibles.com',
    'http://www.sinmarijuana.com',
    'http://www.skychronic.com',
    'http://www.ssweed.com',
    'http://www.summervillemarijuana.com',
    'http://www.summervilleweed.com',
    'http://www.summitweed.com',
    'http://www.sunnyvalemarijuana.com',
    'http://www.switzerlandthc.com',
    'http://www.terpenebenefit.com',
    'http://www.thc69.com',
    'http://www.thcbasket.com',
    'http://www.thcbundle.com',
    'http://www.thccove.com',
    'http://www.thchall.com',
    'http://www.thcrum.com',
    'http://www.thcvineyard.com',
    'http://www.transnerolido.com',
    'http://www.tupaccannabi.com',
    'http://www.tupaccannabis.com',
    'http://www.tupacmarijuana.com',
    'http://www.tupacstrain.com',
    'http://www.tupacthc.com',
    'http://www.tupacweed.com',
    'http://www.txorganicweed.com',
    'http://www.vaorganicweed.com',
    'http://www.vtorganicweed.com',
    'http://www.wakeweed.com',
    'http://www.warrenweed.com',
    'http://www.watermelonweed.com',
    'http://www.waynecannabis.com',
    'http://www.waynemarijuana.com',
    'http://www.weedalys.com',
    'http://www.weedcatsup.com',
    'http://www.weedcourrier.com',
    'http://www.weedexplore.com',
    'http://www.weedjellies.com',
    'http://www.weedll.com',
    'http://www.weedmayo.com',
    'http://www.weedml.com',
    'http://www.weedmm.com',
    'http://www.weedmustard.com',
    'http://www.weedpart.com',
    'http://www.weedqq.com',
    'http://www.weedrelish.com',
    'http://www.weedsaloon.com',
    'http://www.weegrowtents.com',
    'http://www.westvirginiapot.com',
    'http://www.willienelsoncannabis.com',
    'http://www.willienelsonmarijuana.com',
    'http://www.willienelsonstrain.com',
    'http://www.willweed.com',
    'http://www.windycitythc.com',
    'http://www.woodyharrelsonmarijuana.com',
    'http://www.xn--budcaf-gva.com',
    'http://www.xn--weedcaf-hya.com',
    'http://www.yorkmarijuana.com',
    'http://www.paperhandedape.com',
    'http://www.paperaper.com',
    'http://www.palmbayhousing.com',
    'http://www.palmbayapartment.com',
    'http://www.oxnardrental.com',
    'http://www.northporthousing.com',
    'http://www.hodlingape.com',
    'http://www.weedeliveryservicenearme.com',
    'http://www.weedispo.com',
    'http://www.icoaltcoin.com',
    'http://www.memcoinico.com',
    'http://www.icomemecoin.com',
    'http://www.memetokenico.com',
    'http://www.icomemetoken.com',
    'http://www.icoalttoken.com',
    'http://www.icoshittoken.com',
    'http://www.shittokenico.com',
    'http://www.icoshitcoin.com',
    'http://www.harrisburgrental.com'
  ],
    ul = document.createElement('ul');
  ul.setAttribute("id", "loadedlinks")
  //ul.className = "footer-links"
  document.getElementById('loadlinks').appendChild(ul);

  function shuffleArray(sites) {
    for (let i = sites.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sites[i], sites[j]] = [sites[j], sites[i]];
    }
  }
  shuffleArray(sites)

  sites.forEach(function (site) {
    li = document.createElement('li');
    document.getElementById('loadedlinks').appendChild(li);
    let a = document.createElement('a')
    a.href = site;
    li.appendChild(a);
    // console.log(a);
    a.innerHTML += site;
  });

})
