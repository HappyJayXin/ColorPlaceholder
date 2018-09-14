(function($) {
  $.fn.ColorPlaceholder = function(options) {
    var settings = $.extend(
      {
        // default
        text: "請輸入文字",
        color: "#636e72"
      },
      options
    );

    // -----------------------main code---------------------
    this.each(function() {
      const input = $(this);
      input.removeAttr("placeholder");
      input.val("");
      input.css({
        padding: "3px 4px",
        // position: "absolute",
        letterSpacing: "1px"
      });

      // input text color boolean, false is black
      let bColor = true; 
      // user can set his like color by parameter
      input.val(settings.text);

      // TODO: separate value and placeholder color
      let setTextColor = judgment => {
        if (judgment) {
          input.css("color", settings.color);
        } else {
          input.css("color", "black");
        }
      };
      setTextColor(bColor);

      // TODO: an animate when you focus on the input
      input.on("focus", function() {
        if ($(this).val() === settings.text) {
          $(this)
            .stop()
            .animate(
              {
                letterSpacing: "-13px"
              },
              {
                duration: 300,
                complete: function() {
                  $(this).val("");
                  // resume letterspacing
                  $(this).css({ letterSpacing: "1px" });
                  bColor = false;
                  setTextColor(bColor);
                }
              }
            );
        }
      });

      // TODO: an animate when you leave input
      input.on("blur", function() {
        if ($(this).val().length <= 0) {
          $(this).val(settings.text);
          $(this).css({ letterSpacing: "-13px" });
          $(this)
            .stop()
            .animate(
              {
                letterSpacing: "2px"
              },
              300
            );

          bColor = true;
          setTextColor(bColor);
        }
      });
    });
    // -----------------------main code---------------------
    return this;
  };
})(jQuery);
