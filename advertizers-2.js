let adv2 = [
    {
      ADVERTISER: "Direct CBD Online",
      TARGETED_COUNTRIES: "GB, US",
      LINK_ID: "14388914",
      NAME: "Martha Stewart Gummies Sampler",
      DESCRIPTION: "Martha Stewart CBD Gummies Sampler",
      KEYWORDS: "direct cbd online, Martha Stewart, Martha Stewart CBD, Martha Stewart Gummies, Martha Stewart Sampler, Gummies Sampler, Free Shipping, CBD, CBD Tinctures, CBD Edibles, CBD Wellness, CBD Pets, CBD Capsules",
      LINK_TYPE: "Banner",
      THREE_MONTH_EPC: "$0.00 USD",
      SEVEN_DAY_EPC: "N/A",
      LAST_UDPATED: "20-Nov-2020",
      HTML_LINKS: "https://www.awltovhc.com/image-100405473-14388914\" width=\"234\" height=\"60\" alt=\"Martha Stewart CBD Gummies Sampler\" border=\"0\"",
      JAVASCRIPT_LINKS: "<script type=\"text/javascript\" language=\"javascript\" src=\"https://www.kqzyfj.com/placeholder-47277460?target=_top&mouseover=N\"></script>",
      CLICK_URL: "https://www.jdoqocy.com/click-100405473-14388914",
      PROMOTION_TYPE: "N/A",
      COUPON_CODE: "",
      PROMOTIONAL_DATE: "",
      PROMOTIONAL_END_DATE: "",
      CATEGORY: "Wellness",
      ADV_CID: "5528997",
      RELATIONSHIP_STATUS: "Active",
      LANGUAGE: "English",
      MOBILE_OPTIMIZED: "Yes"
    },
    {
      ADVERTISER: "Direct CBD Online",
      TARGETED_COUNTRIES: "GB, US",
      LINK_ID: "14361499",
      NAME: "Kill Cliff CBD",
      DESCRIPTION: "Shop Kill Cliff CBD Products Online",
      KEYWORDS: "direct cbd online, Kill Cliff, Kill Cliff  CBD, Free Shipping, CBD, CBD Drinks, CBD Edibles, CBD Wellness, CBD Energy",
      LINK_TYPE: "Banner",
      THREE_MONTH_EPC: "N/A",
      SEVEN_DAY_EPC: "N/A",
      LAST_UDPATED: "29-Oct-2020",
      HTML_LINKS: "https://www.tqlkg.com/image-100405473-14361499\" width=\"250\" height=\"250\" alt=\"Kill Cliff CBD Products \" border=\"0\"",
      JAVASCRIPT_LINKS: "<script type=\"text/javascript\" language=\"javascript\" src=\"https://www.anrdoezrs.net/placeholder-47277461?target=_top&mouseover=N\"></script>",
      CLICK_URL: "https://www.anrdoezrs.net/click-100405473-14361499",
      PROMOTION_TYPE: "N/A",
      COUPON_CODE: "",
      PROMOTIONAL_DATE: "",
      PROMOTIONAL_END_DATE: "",
      CATEGORY: "Wellness",
      ADV_CID: "5528997",
      RELATIONSHIP_STATUS: "Active",
      LANGUAGE: "English",
      MOBILE_OPTIMIZED: "Yes"
    },
    {
      ADVERTISER: "Direct CBD Online",
      TARGETED_COUNTRIES: "GB, US",
      LINK_ID: "14361474",
      NAME: "Kill Cliff CBD",
      DESCRIPTION: "Shop Kill Cliff CBD Products Online",
      KEYWORDS: "direct cbd online, Kill Cliff, Kill Cliff CBD,Free Shipping, CBD, CBD Drinks, CBD Edibles, CBD Energy",
      LINK_TYPE: "Banner",
      THREE_MONTH_EPC: "N/A",
      SEVEN_DAY_EPC: "N/A",
      LAST_UDPATED: "29-Oct-2020",
      HTML_LINKS: "https://www.awltovhc.com/image-100405473-14361474\" width=\"728\" height=\"90\" alt=\"Kill Cliff CBD Products\" border=\"0\"",
      JAVASCRIPT_LINKS: "<script type=\"text/javascript\" language=\"javascript\" src=\"https://www.jdoqocy.com/placeholder-47277462?target=_top&mouseover=N\"></script>",
      CLICK_URL: "https://www.anrdoezrs.net/click-100405473-14361474",
      PROMOTION_TYPE: "N/A",
      COUPON_CODE: "",
      PROMOTIONAL_DATE: "",
      PROMOTIONAL_END_DATE: "",
      CATEGORY: "Wellness",
      ADV_CID: "5528997",
      RELATIONSHIP_STATUS: "Active",
      LANGUAGE: "English",
      MOBILE_OPTIMIZED: "No"
    },
    {
      ADVERTISER: "Direct CBD Online",
      TARGETED_COUNTRIES: "GB, US",
      LINK_ID: "14306833",
      NAME: "Direct CBD Online: Free Shipping",
      DESCRIPTION: "All the best CBD Brands with FREE SHIPPING on orders $65+",
      KEYWORDS: "direct cbd online, Free Shipping, CBD, CBD Tinctures, CBD Edibles, CBD Wellness, CBD Pets, CBD Capsules",
      LINK_TYPE: "Banner",
      THREE_MONTH_EPC: "$12.66 USD",
      SEVEN_DAY_EPC: "N/A",
      LAST_UDPATED: "20-Aug-2020",
      HTML_LINKS: "https://www.tqlkg.com/image-100405473-14306833\" width=\"300\" height=\"250\" alt=\"Free Shipping on CBD Products\" border=\"0\"",
      JAVASCRIPT_LINKS: "<script type=\"text/javascript\" language=\"javascript\" src=\"https://www.anrdoezrs.net/placeholder-47277463?target=_top&mouseover=N\"></script>",
      CLICK_URL: "https://www.tkqlhce.com/click-100405473-14306833",
      PROMOTION_TYPE: "Free Shipping",
      COUPON_CODE: "",
      PROMOTIONAL_DATE: "19-Aug-2020",
      PROMOTIONAL_END_DATE: "31-Dec-2021",
      CATEGORY: "Wellness",
      ADV_CID: "5528997",
      RELATIONSHIP_STATUS: "Active",
      LANGUAGE: "English",
      MOBILE_OPTIMIZED: "Yes"
    }
  ]

  let finalAd2 = ""
let src2 = [`${adv2[0].HTML_LINKS}`, `${adv2[1].HTML_LINKS}`, `${adv2[2].HTML_LINKS}`, `${adv2[3].HTML_LINKS}`]
let adCategory2 = [`${adv2[0].CATEGORY}`, `${adv2[1].CATEGORY}`, `${adv2[2].CATEGORY}`, `${adv2[3].CATEGORY}`]
let adName2 = [`${adv2[0].NAME}`, `${adv2[1].NAME}`, `${adv2[2].NAME}`, `${adv2[3].NAME}`]
let adURL2 = [`${adv2[0].CLICK_URL}`, `${adv2[1].CLICK_URL}`, `${adv2[2].CLICK_URL}`, `${adv2[3].CLICK_URL}`]
let adDesc2 = [`${adv2[0].DESCRIPTION}`, `${adv2[1].DESCRIPTION}`, `${adv2[2].DESCRIPTION}`, `${adv2[3].DESCRIPTION}`]
let adUpdate2 = [`${adv2[0].LAST_UDPATED}`, `${adv2[1].LAST_UDPATED}`, `${adv2[2].LAST_UDPATED}`, `${adv2[3].LAST_UDPATED}`]
for (var i = 0; i < 4; i++) {
  finalAd2 += `

                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="ne_sidebar_inner_social_wrapper ne_sidebar_second_inner_social_wrapper">
                                    <div class="ne_recent_heading_main_wrapper font_18px">
                                        <h2>${adDesc2[i]}</h2>
                                    </div>
                                    <div class="ne_sidebar_advertize_main_wrapper">
                                        <a target="_blank" href="${adURL2[i]}">
                                            <img src="${src2[i]}>
                                        </a>
                                    </div>
                                </div>
                            </div>
 `
  console.log(finalAd2)
  document.querySelector('.adverts2').innerHTML = finalAd2;
}
