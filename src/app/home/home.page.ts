import { Component, OnInit } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( private admobFree: AdMobFree ) {}

  ngOnInit() {
    this.showBannerAd()
  }
  showBannerAd() {
    let bannerConfig: AdMobFreeBannerConfig = {
        isTesting: true, // Remove in production
        autoShow: true,//,
        id: "ca-app-pub-3940256099942544/6300978111"
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare().then(() => {
        // success
    }).catch(e => alert(e));
  }


  showInterstitialAds(){
    let interstitialConfig: AdMobFreeInterstitialConfig = {
        isTesting: true, // Remove in production
        autoShow: true,//,
        id: "ca-app-pub-3940256099942544/1033173712"
    };
    this.admobFree.interstitial.config(interstitialConfig);
    this.admobFree.interstitial.prepare().then(() => {
    }).catch(e => alert(e));
  }
  
  showRewardVideoAds(){
      let RewardVideoConfig: AdMobFreeRewardVideoConfig = {
          isTesting: true, // Remove in production
          autoShow: true,//,
          id: "ca-app-pub-3940256099942544/5224354917"
      };
      this.admobFree.rewardVideo.config(RewardVideoConfig);
      this.admobFree.rewardVideo.prepare().then(() => {
      }).catch(e => alert(e));
  }

}
