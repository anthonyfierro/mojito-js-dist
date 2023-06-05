Mojito.addTest({
  id: "ex1",
  name: "Test Generated from Split Test app",
  sampleRate: 1,
  state: "live",
  trigger: function (test) {
    // Only activate and bucket users into the experiment if they come from Google
    // (Runs as soon as Mojito.addTest is called)
    if (true) test.activate();
  },
  recipes: {
    0: {
      name: "Control",
    },
    1: {
      name: "Treatment",
      js: function () {
        // This code will run once the test activates & the user is bucketed
        const button = document.querySelector(".button-test");
        console.log("runs");

        if (button) {
          button.style.backgroundColor = "blue";
        }
      },
    },
  },
});