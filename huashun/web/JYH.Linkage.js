var JYH = {
    domain: "",
    isMail: function (mail) {
        return (new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(mail));
    },

    isPostalCode: function (postalCode) {
        return (new RegExp(/^\d{6}$/).test(postalCode));
    },

    isMobile: function (mobile) {
        return (new RegExp(/^\d{11}$/).test(mobile));
    },

    initLink: function () {
        $("a[href^='http://'],a[href^='https://']").each(function () {
            var that = $(this);
            if (that.attr("href").toLowerCase().indexOf(NarukoECData.domain + '/shop') == -1) {
                that.attr("target", "_blank");
            }
        });

        $("a[href^='/']").each(function () {
            var that = $(this);
            if (that.attr("href").toLowerCase().indexOf('/shop') == -1) {
                that.attr("target", "_blank");
            }
        });

        $("a[href='']  img,a[href='#']  img").each(function () {
            var that = $(this).parent();
            that.replaceWith(that.html());
        });
    }
};
JYH.Linkage = {
    CurrentStep: 1,
    IsPostBack: false,
    BoxAddressEdit: null,
    BoxAddressShow: null,
    BoxShipmentEdit: null,
    BoxShipmentShow: null,
    BoxPaymentEdit: null,
    BoxPaymentShow: null,
    BoxCouponEdit: null,
    BoxCouponShow: null,
    BoxFinish: null,
    ListGoods: null,

    CanCOD: false,
    CustomerPoint: 0,
    FreeShipmentPrece: 199,
    CODFreeShipmentPrece: 199,
    LabelGoodsTotal: null,
    LabelSafeTotal: null,
    LabelCouponTotal: null,
    LabelShipmentCost: null,
    LabelPointTotal: null,
    LabelPointCostTotal: null,
    LabelPriceTotal: null,
    TextValidate: null,

    CouponInput: null,
    Coupons: [],
    getCouponByID: function (id) {
        var thisCoupon;
        $.each(this.Coupons, function (i, coupon) {
            if (coupon.CouponID == id) {
                thisCoupon = coupon;
            }
        });
        return thisCoupon;
    },
    AreaList: [],
    getAreaByID: function (id) {
        var thisArea;
        $.each(this.AreaList, function (i, area) {
            if (area.i == id) {
                thisArea = area;
            }
        });
        return thisArea;
    },
    getAreasByParentID: function (parentID) {
        var thisArea = [];
        $.each(this.AreaList, function (i, area) {
            if (area.p == parentID) {
                thisArea[thisArea.length] = area;
            }
        });
        return thisArea;
    },
    getProvinces: function () {
        var thisArea = [];
        $.each(this.AreaList, function (i, area) {
            if (area.l == "1") {
                thisArea[thisArea.length] = area;
            }
        });
        return thisArea;
    },
    AddressList: [],
    getAddressByID: function (id) {
        var thisAddress;
        $.each(this.AddressList, function (i, address) {
            if (address.AddressID == id) {
                thisAddress = address
            }
        });
        return thisAddress;
    },
    Order: null,

    init: function () {

    },
    validate: function () { return false; }
}