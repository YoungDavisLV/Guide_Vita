import{_ as s,r as l,o as r,c,a as e,b as n,d as t,w as a,e as h}from"./app.6ba1c628.js";const d={},u=e("p",null,"On first generation PS Vitas, you must have a memory card to install homebrew. This is because they don't have an internal storage partition, unlike the second generation models.",-1),m=e("h3",{id:"what-you-need",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-you-need","aria-hidden":"true"},"#"),n(" What you need")],-1),_=e("h3",{id:"instructions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#instructions","aria-hidden":"true"},"#"),n(" Instructions")],-1),p=e("h4",{id:"section-i-installing-henkaku-and-vitadeploy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#section-i-installing-henkaku-and-vitadeploy","aria-hidden":"true"},"#"),n(" Section I - Installing HENkaku and VitaDeploy")],-1),f=h('<h4 id="section-ii-configuring-henkaku" tabindex="-1"><a class="header-anchor" href="#section-ii-configuring-henkaku" aria-hidden="true">#</a> Section II - Configuring HENkaku</h4><ol><li>Launch the Settings application</li><li>Navigate to <code>HENkaku Settings</code></li><li>Check &quot;Enable Unsafe Homebrew&quot;</li><li>Return to HENkaku Settings menu</li><li>Close the Settings application</li></ol><h4 id="section-iii-repartitioning" tabindex="-1"><a class="header-anchor" href="#section-iii-repartitioning" aria-hidden="true">#</a> Section III - Repartitioning</h4>',3),g=e("li",null,"Launch the VitaDeploy application",-1),y=e("ul",null,[e("li",null,"If the application crashes, open it and try again")],-1),b=e("li",null,"Once repartitioned, your device will reboot",-1),k=e("h4",{id:"section-iv-reformatting",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#section-iv-reformatting","aria-hidden":"true"},"#"),n(" Section IV - Reformatting")],-1),v=e("li",null,"If you have a memory card inserted, remove it",-1),w=e("li",null,"Open the Settings application",-1),S=e("li",null,[n("Navigate to "),e("code",null,"Format"),n(" -> "),e("code",null,"Restore This System")],-1),N=e("li",null,'When prompted, select "Yes" to confirm 3 times',-1),x=e("li",null,'Select "Format" and "Yes"',-1),I=e("li",null,'Once formatted, select "OK" to reboot',-1),V=e("li",null,"Do the initial setup",-1),E=e("p",null,[n("You should now have a 1GB internal partition on your device. You can verify this by opening the Settings application and navigating to "),e("code",null,"System"),n(" -> "),e("code",null,"System Information"),n(".")],-1);function D(R,H){const o=l("router-link"),i=l("Btn");return r(),c("div",null,[u,e("p",null,[n(`Fortunately, it's possible to use VitaDeploy to re-partition the internal storage, allowing for homebrew installation without a memory card. VitaDeploy can be installed onto the system by replacing the system app "NEAR", and then formatting the system and following `),t(o,{to:"using-henlo"},{default:a(()=>[n("Using HENlo")]),_:1}),n(" again.")]),e("p",null,[n("This partition will only be 1GB in size. We recommend you use this to then install "),t(o,{to:"yamt"},{default:a(()=>[n("YAMT")]),_:1}),n(" for use with an SD2Vita card. This is preferrable, as microSD cards are much cheaper than official Vita memory cards.")]),m,e("ul",null,[e("li",null,[n('A device with the "henlo-bootstrap" screen on it, as followed in '),t(o,{to:"using-henlo"},{default:a(()=>[n("Using HENlo")]),_:1})])]),_,p,e("ol",null,[e("li",null,[n("Press "),t(i,{btn:"confirm"}),n(' on "Install henkaku" to enable homebrew')]),e("li",null,[n("Press "),t(i,{btn:"confirm"}),n(' on "Replace NEAR with VitaDeploy"')]),e("li",null,[n("Press "),t(i,{btn:"confirm"}),n(' on "Exit"')])]),f,e("ol",null,[g,e("li",null,[n("Press "),t(i,{btn:"confirm"}),n(' on "Miscellaneous"')]),e("li",null,[n("Press "),t(i,{btn:"confirm"}),n(' on "Create an internal memory card"')]),e("li",null,[n("Read the disclaimer, and press "),t(i,{btn:"confirm"}),n(" to continue "),y]),e("li",null,[n("Press "),t(i,{btn:"confirm"}),n(' on "Default 2xxx storage configuration"')]),b]),k,e("ol",null,[v,w,S,e("li",null,[n("Press "),t(i,{btn:"confirm"}),n(' on "Restore"')]),N,x,I,V]),E,e("p",null,[n("Now, you can go back to "),t(o,{to:"using-henlo"},{default:a(()=>[n("Using HENlo")]),_:1}),n(" and follow the guide as normal.")])])}var B=s(d,[["render",D],["__file","creating-an-internal-memory-card.html.vue"]]);export{B as default};
