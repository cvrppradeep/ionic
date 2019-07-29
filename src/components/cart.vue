<template>
    <ion-app>

        <ion-header>
            <ion-toolbar style="height: 10px;">
                <div class="toolbar-background toolbar-background-md" style="background-color: rgb(45, 108, 220);"></div>

                <ion-grid>
                    <ion-row class="page" style="background-color: #2d6cdc;">
                        <ion-col>
                            <ion-icon style="font-size: 27px;margin-left: -105px;margin-top: 10px;" color="light" name="arrow-back"></ion-icon>

                        </ion-col>
                        <ion-col>
                            <img style="margin-left: -290px;width: 45px;" src="./../assets/logo2.png">
                        </ion-col>
                        <ion-col>
                            <h2 style="font-size: 14px;color: white;margin-left: -421px;">
                                My Cart (1)
                            </h2>
                        </ion-col>
                    </ion-row>

                </ion-grid>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid>
                <ion-row style="padding-top: 17px;">
                    <ion-col>
                        <ion-icon style="margin-top: 17px;margin-left: -91px;" color="blue" name="pin"></ion-icon>

                    </ion-col>
                    <ion-col>
                        <h5 style="font-size: 16px;margin-left: -222px;">Enter Pincode</h5>
                    </ion-col>
                    <ion-col>
                        <ion-button color="light" size="small" style="margin-left: 31px;">
                            <span class="button-inner" style=" middle;color: rgb(40, 116, 240);">
                                <b>Add</b>
                            </span>
                            <div class="button-effect"></div>
                        </ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <ion-grid style="background-color: lightgrey;height: 16PX;">
                <ion-row>
                </ion-row>
            </ion-grid>
            <ion-grid>
                <ion-row>
                    <h1 style="font-size: 15px;margin-left: 10px;">
                        Kechaoda K66
                    </h1>
                </ion-row>
                <ion-row>
                    <ion-col style="margin-left: 211px;">
                        <h2 style="color:gray;margin-left: -412px;font-size: 13px;margin-top: -11px;">
                            Silver
                        </h2>
                    </ion-col>
                    <ion-col>
                        <img style="margin-top: -39px;margin-left: 49px;" src="./../assets/phn.png">
                    </ion-col>
                    <ion-col>
                        <h3 style="font-size: 11px;margin-left: -526px;color:gray;">
                            Seller:MOBILEMASTERS
                        </h3>
                    </ion-col>
                    <ion-col>
                        <img style="margin-left: -436px;margin-top: 15px;" src="./../assets/logo.png">
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <span style="margin-left: -38px">₹1,199</span>
                    </ion-col>
                    <ion-col>
                        <span style="color:gray;">
                            <del style="margin-left: -134px;">₹1,299</del>
                        </span>
                    </ion-col>
                    <ion-col>
                        <span style="color:green;margin-left: -223px;">7% off</span>
                    </ion-col>
                    <ion-col>
                        <ion-item style="margin-top: -13px; width: 129px;margin-left: -48px;">
                            <ion-label>Qty</ion-label>
                            <ion-select value="1" ok-text="Okay" cancel-text="Dismiss">
                                <ion-select-option value="1">1</ion-select-option>
                                <ion-select-option value="2">2</ion-select-option>
                                <ion-select-option value="3">3</ion-select-option>
                                <ion-select-option value="4">4</ion-select-option>
                            </ion-select>
                        </ion-item>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <h3 style="color:gray;font-size: 12px;margin-left: 10px;margin-top: -12px;">
                        1 Offer Available
                    </h3>
                </ion-row>
                <ion-row style="font-size: 12px;margin-left: 10px;">
                    Delivery in 3-4 days | Free
                </ion-row>
            </ion-grid>
            <ion-grid>
                <ion-row style="border-bottom: 1px solid #ccc;border-top: 1px solid #ccc;">
                    <ion-col style="margin-top: -5px;">
                        <button style="margin-left: -1px;width: 166px;font-size: 14px;height: 34px;background-color: white;">
                            <span style="margin-left: -83px;">Save for later</span>
                            <ion-icon style="margin-left: -106px;" name="archive"></ion-icon>
                        </button>
                        <button style="width: 181px;margin-left: 25px;height: 34px;background-color: white;border-left:1px solid #ccc">Remove
                            <ion-icon style="margin-left: -72px;" name="trash"></ion-icon>
                        </button>

                    </ion-col>
                </ion-row>
            </ion-grid>
            <ion-grid style="background-color: lightgrey;height: 16PX;margin-top: -5px;">
                <ion-row>
                </ion-row>
            </ion-grid>
            <ion-grid>
                <ion-row style="border-bottom: 1px solid #ccc;">
                    <h1 style="color:gray;font-size: 12px;margin-left: 10px;">
                        PRICE DETAILS</h1>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <h2 style="font-size: 14px;margin-left: -93px;">
                            Price(1 item)
                        </h2>
                    </ion-col>
                    <ion-col>
                        <h3 style="font-size: 14px;margin-left: 114px;">
                            ₹1,199
                        </h3>
                    </ion-col>
                </ion-row>
                <ion-row style="border-bottom: 1px solid #ccc;">
                    <ion-col style="margin-top: -21px;">
                        <h4 style="font-size: 14px;margin-left: -119px;">
                            Delivery</h4>
                    </ion-col>
                    <ion-col style="margin-top: -21px;">
                        <h5 style="font-size: 14px;margin-left: 114px;color:green;"> Free</h5>

                    </ion-col>
                </ion-row>
                <ion-row style="border-bottom: 1px solid #ccc;">
                    <ion-col>
                        <h1 style="font-size: 14px;margin-left: 1px;margin-top: 10px;">
                            Amount
                        </h1>
                    </ion-col>
                    <ion-col>
                        <h3 style="font-size: 14px;margin-left: -5px;margin-top: 10px;">
                            Payable
                        </h3>
                    </ion-col>
                    <h2 style="font-size: 14px;margin-left: 223px;margin-top: 10px;">
                        ₹1,199
                    </h2>
                    <ion-col>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <h1 style="font-size: 12px;margin-left: 5px;margin-top: 10px;color: green;">
                        You will save ₹100 on this order
                    </h1>
                </ion-row>
            </ion-grid>
            <ion-grid style="background-color: lightgrey;height: 16PX;margin-top: -5px;">
                <ion-row>
                </ion-row>
            </ion-grid>
            <ion-grid>
                <ion-row>
                    <img style="width: 400px;margin-top: -5px;" src="./../assets/logo9.png">
                </ion-row>
            </ion-grid>

        </ion-content>
    </ion-app>

</template>
        <c\<script>
        export default {
            
        }
        </script>
        <style>
</style>
        
        
            
        
        