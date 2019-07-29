<template>
    <ion-app>
        <ion-page class="show-page">
            <ion-header>
                <ion-toolbar>
                    <div class="toolbar-background toolbar-background-md" style="background-color: rgb(45, 108, 220);"></div>

                    <ion-grid>
                        <ion-row class="page" style="background-color: #2d6cdc;border-bottom: 1px solid #488aff;">
                            <ion-col>
                                <img style="display: flex;" src="./../assets/logo7.png">
                            </ion-col>
                            <ion-col>
                                <ion-icon name="close" style="font-size: 28px;margin-left: 142px;" color="light"></ion-icon>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <h1 style="font-size: 15PX;color: blanchedalmond;">
                                    Please enter your details to
                                </h1>
                                <h2 style="font-size: 15PX;color: blanchedalmond; margin-left: -126px;">continue
                                </h2>
                            </ion-col>
                            <ion-col>
                                <img style="margin-left: 90px;margin-top: -3px;" src="./../assets/logo8.png">
                            </ion-col>
                        </ion-row>
                        <ion-row style="padding-bottom: 31px;">
                        </ion-row>
                    </ion-grid>
                </ion-toolbar>
            </ion-header>

            <ion-content class="content" no-padding style="margin-top: 157px;">
                <ion-item class="padding" style="padding-bottom: 26px;">

                    <h1 style="margin-top: -31px; font-size: 10px;color: blue;}">
                        Email/Mobileno
                    </h1>
                    <div style="margin-left: -69px;color: blue;">
                        <span>IN +91</span>
                    </div>
                    <ion-input required type="number" placeholder="Mobile no"></ion-input>
                    <div style="color: blue;">
                        <span>
                            change</span>
                    </div>
                </ion-item>

                <ion-item class="padding" style="padding-bottom: 44px;">
                    <h1 style=" font-size: 10px;color: blue;margin-top: -28px;}">
                        Password
                    </h1>
                    <ion-input required type="password" placeholder="Password"></ion-input>
                    <div style="color: blue;">
                        <span>
                            forgot?</span>
                    </div>
                </ion-item>
                <ion-grid>
                    <ion-row class="align">
                        <button class="button button-md button-md" style="background: #fb641b;width: 354px;">
                            <span class="button-inner">CONTINUE</span>
                            <div class="button-effect"></div>

                        </button>
                    </ion-row>
                    <ion-row class="align">
                        <button class="button button-md button-md-light" style="width:354px;">
                            <span class="button-inner" style="color: rgb(40, 116, 240);">Login with otp</span>
                            <div class="button-effect"></div>
                        </button>
                    </ion-row>
                </ion-grid>

            </ion-content>
        </ion-page>
    </ion-app>
</template>
  <script>
export default {};
</script>
        <style>
.color {
  color: white;
}
.align {
  justify-content: center;
}
.padding {
  padding-left: 10px;
  padding-right: 23px;
}
</style>