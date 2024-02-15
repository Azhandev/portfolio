const myText = new SplitType("#my_text");
gsap.to(".char", {
	y: 0,
	stagger: 0.100,
	delay: 0.2,
	duration: 0.1,
	yoyo: true,
});

            tsParticles.load("tsparticles", {
	fps_limit: 100,
	interactivity: {
	  detect_on: "canvas",
	  events: {
	   
		onhover: {
		  enable: true,
		  mode: "repulse",
		  parallax: { enable: false, force: 50, smooth: 10 }
		},
		resize: true
	  },
	  modes: {
		bubble: { distance: 300, duration: 2, opacity: 0.8, size: 100, speed: 2},
		grab: { distance: 300, line_linked: { opacity: 1 } },
		push: { particles_nb: 5 },
		remove: { particles_nb: 3 },
		repulse: { distance: 100, duration: 0.9 }
	  }
	},
	particles: {
	  color: { value: "#FF0000" },
	  line_linked: {
		color: "#FF0000",
		distance: 150,
		enable: true,
		opacity: 0.4,
		width: 1
	  },
	  move: {
		attract: { enable: false, rotateX: 600, rotateY: 1200 },
		bounce: false,
		direction: "none",
		enable: true,
		out_mode: "out",
		random: false,
		speed: 1.5,
		straight: false
	  },
	  number: { density: { enable: true, value_area: 800 }, value: 100 },
	  opacity: {
		anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
		random: false,
		value: 0.5
	  },
	  shape: {
		character: {
		  fill: false,
		  font: "Verdana",
		  style: "",
		  value: "*",
		  weight: "400"
		},
		image: {
		  height: 100,
		  replace_color: true,
		  src: "images/github.svg",
		  width: 100
		},
		polygon: { nb_sides: 5 },
		stroke: { color: "#000000", width: 0 },
		type: "circle"
	  },
	  size: {
		anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
		random: true,
		value: 5
	  }
	},
	polygon: {
	  draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
	  move: { radius: 10 },
	  scale: 1,
	  type: "none",
	  url: ""
	},
	retina_detect: true
  });


//   OTHER PAGE BACKGROUND

tsParticles.load({
	id: "tsparticles1",
	options: {
	  background: {
		color: "#000",
		repeat: "no-repeat",
		size: "60%",
		position: "60% 50%"
	  },
	  interactivity: {
		events: {
		  onClick: {
			enable: true,
			mode: "repulse"
		  },
		  onHover: {
			enable: true,
			mode: "bubble"
		  }
		},
		modes: {
		  bubble: {
			distance: 200,
			duration: 2,
			opacity: 0,
			size: 0,
			speed: 9
		  },
		  repulse: {
			distance: 400,
			duration: 0.2
		  }
		}
	  },
	  particles: {
		color: { value: "#ffffff" },
		move: {
		  direction: "none",
		  enable: true,
		  outModes: "out",
		  random: true,
		  speed: 0.8
		},
		number: {
		  density: {
			enable: true
		  },
		  value: 500
		},
		opacity: {
		  animation: {
			enable: true,
			speed: 6
		  },
		  value: { min: 0.5, max: 0.7 }
		},
		shape: {
		  type: "circle"
		},
		size: {
		  value: 1.2
		}
	  }
	}
  });

  const myText1 = new SplitType("#my_text1");
gsap.to(".char", {
	y: 0,
	stagger: 0.100,
	delay: 0.2,
	duration: 0.1,
	yoyo: true,
});
