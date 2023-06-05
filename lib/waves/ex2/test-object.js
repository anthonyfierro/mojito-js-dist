Mojito.addTest({
  id: "ex2",
  name: "Test suite Generated from Split Test app",
  sampleRate: 0.5,
  state: "live",
  trigger: function (test) {
    // Only activate and bucket users into the experiment if they come from Google
    // (Runs as soon as Mojito.addTest is called)
    test.activate();
  },
  recipes: {
    0: {
      name: "Control",
    },
    1: {
      name: "My First Test",
      js: function () {
        const button = document.querySelector(".button-test");

        if (button) {
          button.style.backgroundColor = "blue";
        }
      },
    },
  },
});
