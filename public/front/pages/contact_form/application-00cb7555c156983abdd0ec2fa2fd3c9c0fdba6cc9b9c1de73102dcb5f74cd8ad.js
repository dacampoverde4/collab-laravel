$(window).on("load",function(){function e(){var e=null;return window&&window.analytics&&(e=window.analytics.user().anonymousId()),e}function t(t,n){var i=u.indexOf(t)>1?"website_contact_form_morethan5_submitted":"website_contact_form_lessthan5_submitted";window&&window.analytics&&(window.analytics.track("website_contact_form_submitted",{anonymous_id:e(),properties:{page_url:window.location.href,location:n}}),window.analytics.track(i,{anonymous_id:e(),properties:{page_url:window.location.href,location:n}})),a(t)}function a(e){n("https://dc.ads.linkedin.com/collect/?pid=350724&conversionId=580164&fmt=gif"),u.indexOf(e)>1?n("https://dc.ads.linkedin.com/collect/?pid=350724&conversionId=580172&fmt=gif"):n("https://dc.ads.linkedin.com/collect/?pid=350724&conversionId=580180&fmt=gif")}function n(e){var t=new Image;t.onload=function(){var e=document.createElement("img");e.src=this.src,e.height=1,e.width=1,e.style.display="none",document.getElementById("contact-form").appendChild(e)},t.src=e}function i(){var a=f.val().trim(),n=m.val().trim(),i=c.val().trim(),r=h.val().trim(),l=g.val().trim(),u=d.find("option:selected").text().trim(),p=e(),w=!0,v="contact_form_";"block"===o.css("display")&&(u=s.text().trim()),$.post(hostUrl.trim()+"contact-form",{email:a,phone_number:n,company:i,first_name:r,last_name:l,nb_employees:u,anonymous_id:p,location:v,sf_lead:w}).done(function(){t(u,v),$("#contact-form #contact_check").removeClass("hidden"),$("#contact-form .btn-primary-large").attr("disabled",!0)}).fail(function(){$("#contact-form #text").removeClass("hidden"),$("#contact-form #loader").addClass("hidden"),$("#contact-form #contact_check").addClass("hidden")}).always(function(){$("#contact-form #loader").addClass("hidden")})}var o=$("#contact-form .select-for-desktop"),r=$("#contact-form .select-for-desktop .options"),l=$("#contact-form .select-for-desktop .option"),s=$("#contact-form .select-for-desktop .select"),d=$("#contact-form #employees-number"),c=$("#contact-form #company"),f=$("#contact-form #email"),m=$("#contact-form #phone"),h=$("#contact-form #firstName"),g=$("#contact-form #lastName"),u=["1","2 - 5","5 - 10","10 - 20","20 - 50","50 - 100","100 +"];l.click(function(e){s.text(e.target.innerText),s.removeClass("pure"),r.toggleClass("hidden")}),s.click(function(){r.toggleClass("hidden")}),$.validator.addMethod("regex",function(e,t,a){return this.optional(t)||e.match("string"==typeof a?new RegExp(a):a)}),$("#contact-form").validate({rules:{email:{required:!0,email:!0,regex:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/},phone:{required:!0,regex:/^((\+)33|0)[1-9](\d{2}){4}$/},employeesNumber:{required:!0}},messages:{email:{required:'<svg width="16" height="16"><defs><path id="warning_a" d="M8.25 8.75a.25.25 0 0 1-.5 0L7 3.25a1 1 0 0 1 2 0l-.75 5.5zm-.25 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7.712-.78L9.714.972c-.776-1.295-2.652-1.295-3.428 0l-5.998 10C-.512 12.304.448 14 2.002 14h11.996c1.554 0 2.514-1.696 1.714-3.03z"/></defs><use fill="#f84f4f" xlink:href="#warning_a" fill-rule="evenodd" transform="translate(0 1)"/></svg>',regex:'<svg width="16" height="16"><defs><path id="warning_a" d="M8.25 8.75a.25.25 0 0 1-.5 0L7 3.25a1 1 0 0 1 2 0l-.75 5.5zm-.25 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7.712-.78L9.714.972c-.776-1.295-2.652-1.295-3.428 0l-5.998 10C-.512 12.304.448 14 2.002 14h11.996c1.554 0 2.514-1.696 1.714-3.03z"/></defs><use fill="#f84f4f" xlink:href="#warning_a" fill-rule="evenodd" transform="translate(0 1)"/></svg>',email:'<svg width="16" height="16"><defs><path id="warning_a" d="M8.25 8.75a.25.25 0 0 1-.5 0L7 3.25a1 1 0 0 1 2 0l-.75 5.5zm-.25 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7.712-.78L9.714.972c-.776-1.295-2.652-1.295-3.428 0l-5.998 10C-.512 12.304.448 14 2.002 14h11.996c1.554 0 2.514-1.696 1.714-3.03z"/></defs><use fill="#f84f4f" xlink:href="#warning_a" fill-rule="evenodd" transform="translate(0 1)"/></svg>'},phone:{required:'<svg width="16" height="16"><defs><path id="warning_a" d="M8.25 8.75a.25.25 0 0 1-.5 0L7 3.25a1 1 0 0 1 2 0l-.75 5.5zm-.25 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7.712-.78L9.714.972c-.776-1.295-2.652-1.295-3.428 0l-5.998 10C-.512 12.304.448 14 2.002 14h11.996c1.554 0 2.514-1.696 1.714-3.03z"/></defs><use fill="#f84f4f" xlink:href="#warning_a" fill-rule="evenodd" transform="translate(0 1)"/></svg>',regex:'<svg width="16" height="16"><defs><path id="warning_a" d="M8.25 8.75a.25.25 0 0 1-.5 0L7 3.25a1 1 0 0 1 2 0l-.75 5.5zm-.25 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7.712-.78L9.714.972c-.776-1.295-2.652-1.295-3.428 0l-5.998 10C-.512 12.304.448 14 2.002 14h11.996c1.554 0 2.514-1.696 1.714-3.03z"/></defs><use fill="#f84f4f" xlink:href="#warning_a" fill-rule="evenodd" transform="translate(0 1)"/></svg>',phone:'<svg width="16" height="16"><defs><path id="warning_a" d="M8.25 8.75a.25.25 0 0 1-.5 0L7 3.25a1 1 0 0 1 2 0l-.75 5.5zm-.25 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7.712-.78L9.714.972c-.776-1.295-2.652-1.295-3.428 0l-5.998 10C-.512 12.304.448 14 2.002 14h11.996c1.554 0 2.514-1.696 1.714-3.03z"/></defs><use fill="#f84f4f" xlink:href="#warning_a" fill-rule="evenodd" transform="translate(0 1)"/></svg>'},employeesNumber:{required:'<svg width="16" height="16"><defs><path id="warning_a" d="M8.25 8.75a.25.25 0 0 1-.5 0L7 3.25a1 1 0 0 1 2 0l-.75 5.5zm-.25 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7.712-.78L9.714.972c-.776-1.295-2.652-1.295-3.428 0l-5.998 10C-.512 12.304.448 14 2.002 14h11.996c1.554 0 2.514-1.696 1.714-3.03z"/></defs><use fill="#f84f4f" xlink:href="#warning_a" fill-rule="evenodd" transform="translate(0 1)"/></svg>',employeesNumber:'<svg width="16" height="16"><defs><path id="warning_a" d="M8.25 8.75a.25.25 0 0 1-.5 0L7 3.25a1 1 0 0 1 2 0l-.75 5.5zm-.25 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7.712-.78L9.714.972c-.776-1.295-2.652-1.295-3.428 0l-5.998 10C-.512 12.304.448 14 2.002 14h11.996c1.554 0 2.514-1.696 1.714-3.03z"/></defs><use fill="#f84f4f" xlink:href="#warning_a" fill-rule="evenodd" transform="translate(0 1)"/></svg>'}},submitHandler:function(){if("block"===o.css("display")){var e=s[0].innerText;if("Nombre d'employ\xe9s *"==e||"Employees number *"==e)return void $(".select-container .error").addClass("active");$(".select-container .error").removeClass("active")}$("#contact-form #text").addClass("hidden"),$("#contact-form #loader").removeClass("hidden"),i()}})});