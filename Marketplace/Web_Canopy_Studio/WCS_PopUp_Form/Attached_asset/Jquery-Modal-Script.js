(function(a){if(typeof module==="object"&&typeof module.exports==="object"){a(require("jquery"),window,document)}else{a(jQuery,window,document)}}(function(f,d,b,g){var c=[],a=function(){return c.length?c[c.length-1]:null},e=function(){var h,j=false;for(h=c.length-1;h>=0;h--){if(c[h].$blocker){c[h].$blocker.toggleClass("current",!j).toggleClass("behind",j);j=true}}};f.modal=function(j,i){var h,k;this.$body=f("body");this.options=f.extend({},f.modal.defaults,i);this.options.doFade=!isNaN(parseInt(this.options.fadeDuration,10));this.$blocker=null;if(this.options.closeExisting){while(f.modal.isActive()){f.modal.close()}}c.push(this);if(j.is("a")){k=j.attr("href");this.anchor=j;if(/^#/.test(k)){this.$elm=f(k);if(this.$elm.length!==1){return null}this.$body.append(this.$elm);this.open()}else{this.$elm=f("<div>");this.$body.append(this.$elm);h=function(m,l){l.elm.remove()};this.showSpinner();j.trigger(f.modal.AJAX_SEND);f.get(k).done(function(l){if(!f.modal.isActive()){return}j.trigger(f.modal.AJAX_SUCCESS);var m=a();m.$elm.empty().append(l).on(f.modal.CLOSE,h);m.hideSpinner();m.open();j.trigger(f.modal.AJAX_COMPLETE)}).fail(function(){j.trigger(f.modal.AJAX_FAIL);var l=a();l.hideSpinner();c.pop();j.trigger(f.modal.AJAX_COMPLETE)})}}else{this.$elm=j;this.anchor=j;this.$body.append(this.$elm);this.open()}};f.modal.prototype={constructor:f.modal,open:function(){var h=this;this.block();this.anchor.blur();if(this.options.doFade){setTimeout(function(){h.show()},this.options.fadeDuration*this.options.fadeDelay)}else{this.show()}f(b).off("keydown.modal").on("keydown.modal",function(i){var j=a();if(i.which===27&&j.options.escapeClose){j.close()}});if(this.options.clickClose){this.$blocker.click(function(i){if(i.target===this){f.modal.close()}})}},close:function(){c.pop();this.unblock();this.hide();if(!f.modal.isActive()){f(b).off("keydown.modal")}},block:function(){this.$elm.trigger(f.modal.BEFORE_BLOCK,[this._ctx()]);this.$body.css("overflow","hidden");this.$blocker=f('<div class="'+this.options.blockerClass+' blocker current"></div>').appendTo(this.$body);e();if(this.options.doFade){this.$blocker.css("opacity",0).animate({opacity:1},this.options.fadeDuration)}this.$elm.trigger(f.modal.BLOCK,[this._ctx()])},unblock:function(h){if(!h&&this.options.doFade){this.$blocker.fadeOut(this.options.fadeDuration,this.unblock.bind(this,true))}else{this.$blocker.children().appendTo(this.$body);this.$blocker.remove();this.$blocker=null;e();if(!f.modal.isActive()){this.$body.css("overflow","")}}},show:function(){this.$elm.trigger(f.modal.BEFORE_OPEN,[this._ctx()]);if(this.options.showClose){this.closeButton=f('<a href="#close-modal" rel="modal:close" class="close-modal '+this.options.closeClass+'">'+this.options.closeText+"</a>");this.$elm.append(this.closeButton)}this.$elm.addClass(this.options.modalClass).appendTo(this.$blocker);if(this.options.doFade){this.$elm.css({opacity:0,display:"inline-block"}).animate({opacity:1},this.options.fadeDuration)}else{this.$elm.css("display","inline-block")}this.$elm.trigger(f.modal.OPEN,[this._ctx()])},hide:function(){this.$elm.trigger(f.modal.BEFORE_CLOSE,[this._ctx()]);if(this.closeButton){this.closeButton.remove()}var h=this;if(this.options.doFade){this.$elm.fadeOut(this.options.fadeDuration,function(){h.$elm.trigger(f.modal.AFTER_CLOSE,[h._ctx()])})}else{this.$elm.hide(0,function(){h.$elm.trigger(f.modal.AFTER_CLOSE,[h._ctx()])})}this.$elm.trigger(f.modal.CLOSE,[this._ctx()])},showSpinner:function(){if(!this.options.showSpinner){return}this.spinner=this.spinner||f('<div class="'+this.options.modalClass+'-spinner"></div>').append(this.options.spinnerHtml);this.$body.append(this.spinner);this.spinner.show()},hideSpinner:function(){if(this.spinner){this.spinner.remove()}},_ctx:function(){return{elm:this.$elm,$elm:this.$elm,$blocker:this.$blocker,options:this.options}}};f.modal.close=function(h){if(!f.modal.isActive()){return}if(h){h.preventDefault()}var i=a();i.close();return i.$elm};f.modal.isActive=function(){return c.length>0};f.modal.getCurrent=a;f.modal.defaults={closeExisting:true,escapeClose:true,clickClose:true,closeText:"Close",closeClass:"",modalClass:"modal",blockerClass:"jquery-modal",spinnerHtml:'<div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div>',showSpinner:true,showClose:true,fadeDuration:null,fadeDelay:1};f.modal.BEFORE_BLOCK="modal:before-block";f.modal.BLOCK="modal:block";f.modal.BEFORE_OPEN="modal:before-open";f.modal.OPEN="modal:open";f.modal.BEFORE_CLOSE="modal:before-close";f.modal.CLOSE="modal:close";f.modal.AFTER_CLOSE="modal:after-close";f.modal.AJAX_SEND="modal:ajax:send";f.modal.AJAX_SUCCESS="modal:ajax:success";f.modal.AJAX_FAIL="modal:ajax:fail";f.modal.AJAX_COMPLETE="modal:ajax:complete";f.fn.modal=function(h){if(this.length===1){new f.modal(this,h)}return this};f(b).on("click.modal",'a[rel~="modal:close"]',f.modal.close);f(b).on("click.modal",'a[rel~="modal:open"]',function(h){h.preventDefault();f(this).modal()})}));