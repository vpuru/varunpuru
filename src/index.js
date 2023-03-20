window.addEventListener("scroll", () => {
  // Get the current scroll position of the window
  const scrollPosition = window.scrollY;

  // Get the height of the page and the viewport
  const pageHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;

  // Loop through each section on the page and check if it's currently in view
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionClass = section.id;

    if (scrollPosition + viewportHeight >= pageHeight) {
      if (sectionClass === "contact") {
        const contactItem = document.querySelector("#js-nav-contact");
        contactItem.classList.remove("opacity-70");
        contactItem.classList.add("opacity-100");
      } else {
        const contactItem = document.querySelector(`#js-nav-${sectionClass}`);
        contactItem.classList.remove("opacity-100");
        contactItem.classList.add("opacity-70");
      }
    } else if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      // If the section is in view, add the "active" class to the corresponding navbar item
      const navItem = document.querySelector(`#js-nav-${sectionClass}`);
      navItem.classList.remove("opacity-70");
      navItem.classList.add("opacity-100");
    } else {
      // If the section is not in view, remove the "active" class from the corresponding navbar item
      const navItem = document.querySelector(`#js-nav-${sectionClass}`);
      navItem.classList.remove("opacity-100");
      navItem.classList.add("opacity-70");
    }
  });
});

const skills = [
  "C++",
  "Python",
  "Java",
  "JavaScript",
  "PostgreSQL",
  "Spring Boot",
  "Spring Batch",
  "Express.js",
  "Flask",
  "Apache Flink",
  "React",
  "Bash",
  "AWS",
  "Cucumber",
  "Docker",
  "Git",
  "Jenkins",
  "JUnit",
  "Kafka",
  "Kubernetes",
  "Terraform",
  "Unix",
];

const courses = [
  "EECS 481. Software Engineering",
  "EECS 482. Operating Systems",
  "EECS 484. Database Management Systems",
  "EECS 485. Web Systems",
  "EECS 493. User Interface Development",
  "EECS 497. Human-Centered Software and Design and Development",
];

// Loop through the desired number of times and append the box each time
jQuery(function () {
  for (let i = 0; i < skills.length; i++) {
    const box = $("<div>", {
      class:
        "inline-block p-2 shadow-md rounded border border-stone-200 hover:-translate-y-1 transition",
      text: skills[i],
    });

    // Append the box to the container element
    $("#about-skills").append(box);
  }

  for (let i = 0; i < courses.length; i++) {
    const box = $("<div>", {
      class:
        "inline-block p-2 shadow-md rounded border border-stone-200 hover:-translate-y-1 transition",
      text: courses[i],
    });

    // Append the box to the container element
    $("#education-courses").append(box);
  }
});
