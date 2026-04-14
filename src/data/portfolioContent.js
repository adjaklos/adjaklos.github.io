const assetPath = (fileName) =>
  `${process.env.PUBLIC_URL || ''}/assets/new/${encodeURIComponent(fileName)}`;

export const profileImage = assetPath('selfie pro.jpg');
export const aboutGallery = [
  {
    src: assetPath('selfie smile.jpg'),
    alt: 'Samuel Adjaklo smiling portrait',
  },
  {
    src: assetPath('selfie goofy.jpg'),
    alt: 'Samuel Adjaklo casual portrait',
  },
];
export const contactPortrait = assetPath('self semi pro.jpg');

export const resumeUrl = assetPath('resume.pdf');
export const transcriptUrl = `${process.env.PUBLIC_URL || ''}/assets/${encodeURIComponent(
  'OfficialTranscript.PDF'
)}`;

export const identityCards = [
  {
    title: 'HATLabs research',
    text: 'My recent work lives at the intersection of real-time sensing, embedded systems, and hardware that has to respond reliably under tight timing constraints.',
  },
  {
    title: 'Bench-first engineering',
    text: 'I like designs that survive outside the notebook. Most of my favorite work comes from building, probing, debugging, and improving a system until it behaves the way it should.',
  },
  {
    title: 'Teacher and teammate',
    text: 'Between research and learning-assistant work, I enjoy breaking difficult ideas into something clear, useful, and collaborative.',
  },
  {
    title: 'Art stays part of it',
    text: 'Painting and portrait work keep my eye sharp for detail, balance, and patience, and that carries back into the way I approach engineering.',
  },
];

export const landingSections = [
  {
    to: '/about',
    label: 'About',
    title: 'Who I am beyond the resume',
    text: 'A more personal look at how I think, what I enjoy building, and why art still belongs in the same story as engineering.',
  },
  {
    to: '/experience',
    label: 'Experience',
    title: 'Research, industry, and teaching',
    text: 'HATLabs research, Fraunhofer work, and my undergraduate learning-assistant role all in one place.',
  },
  {
    to: '/coursework',
    label: 'Coursework',
    title: 'Classes that shaped my foundation',
    text: 'A semester-by-semester transcript view plus my ECE 203 circuit builds, including the temperature-controlled fan and the stereo mixer and amplifier.',
  },
  {
    to: '/projects',
    label: 'Projects',
    title: 'Embedded and audio systems from my resume',
    text: 'Expanded writeups for my Embedded Task Scheduler, Motion-Adaptive Audio System, and Embedded Audio Synthesizer and Signal Analysis System.',
  },
  {
    to: '/resume',
    label: 'Resume',
    title: 'Resume and transcript',
    text: 'View the latest resume directly on the page and open the transcript when you want the verified academic record.',
  },
  {
    to: '/art',
    label: 'Art',
    title: 'Painting, pencil, and creative work',
    text: 'The hobby side of the portfolio, because drawing and painting are still part of what makes my work feel like mine.',
  },
];

export const aboutStory = [
  'I am a Computer Engineering student at Michigan State University who likes the moment when a design stops being theoretical and starts behaving like a real system. That is the part I keep chasing, whether the work is analog, embedded, or somewhere in between.',
  'What keeps me interested is the mix of precision and experimentation. I enjoy tracing signals, tightening timing, tuning a circuit, and learning enough about a problem to explain it clearly to someone else.',
  'Outside the lab, I spend time painting and drawing portraits. That creative side is not separate from the technical one. It trains the same patience, attention, and willingness to keep refining something until it finally looks or works the way it should.',
];

export const quickFacts = [
  {
    label: 'Education',
    value: 'Michigan State University, B.S. in Computer Engineering, expected May 2027, GPA 3.84',
  },
  {
    label: 'Current focus',
    value: 'Embedded systems, real-time sensing, hardware-software integration, and practical circuit design',
  },
  {
    label: 'Languages and tools',
    value: 'C/C++, Python, Verilog, ARM Assembly, MATLAB, LTSpice, LabVIEW, Git, Arduino, ESP32, FPGA',
  },
  {
    label: 'What I enjoy',
    value: 'Projects that move from schematic to prototype, research that needs careful debugging, and creative work that keeps me observant',
  },
];

export const experienceHighlights = [
  {
    id: 'hatlabs',
    title: 'Research Assistant, HATLabs',
    organization: 'Department of Electrical and Computer Engineering, Michigan State University',
    period: 'Aug 2025 - Present',
    description:
      'At HATLabs, I work on embedded systems that need to sense, identify, and respond in real time. The work combines timing-sensitive firmware, signal handling, and hardware integration, which is exactly the kind of engineering I enjoy most.',
    details: [
      'Developed a real-time, interrupt-driven IR identification system that uses pulse-width encoding to distinguish multiple devices with microsecond-level timing accuracy.',
      'Designed a low-latency embedded platform that combines IMU-based orientation tracking with IR identity detection and hardware signal amplification for more reliable behavior.',
      'Built a real-time gesture-recognition workflow from IMU data for wearable interaction and motion-based input.',
    ],
    focus: ['Real-time sensing', 'Interrupt-driven firmware', 'IMU integration'],
    image: assetPath('Research image.png'),
    alt: 'HATLabs research setup with embedded sensing hardware',
  },
  {
    id: 'fraunhofer',
    title: 'Research Assistant, Fraunhofer USA Center Midwest',
    organization: 'East Lansing, Michigan',
    period: 'Sep 2023 - May 2024',
    description:
      'My time at Fraunhofer gave me experience in a professional research environment where data quality, repeatability, and practical automation mattered just as much as the initial idea.',
    details: [
      'Developed a Python workflow with SciPy to analyze electrochemical redox data for heavy-metal detection and improve measurement accuracy.',
      'Programmed an Arduino-based pump control system with Bluetooth HC-05 communication to reduce flow variation and improve experimental consistency.',
      'Worked on turning measurements and instrumentation into something dependable enough to support research decisions, not just one-off demonstrations.',
    ],
    focus: ['Python and SciPy', 'Arduino control', 'Applied research'],
    sideNote:
      'Fraunhofer pushed me to think about engineering in terms of repeatability, cleaner data, and systems that people can trust beyond a single test.',
  },
  {
    id: 'learning-assistant',
    title: 'Undergraduate Learning Assistant',
    organization: 'Department of Physics, Michigan State University',
    period: 'Aug 2024 - Present',
    description:
      'Teaching has made me better at engineering. Helping students work through modeling, problem solving, and lab logic forces me to understand concepts deeply enough to make them click for someone else.',
    details: [
      'Facilitate weekly Physics 183 problem-solving labs for about 15 students and guide teams using VPython to model physics systems.',
      'Help students move from equations and code to clearer reasoning, stronger teamwork, and better debugging habits.',
      'Support lesson flow, collaboration, and technical instruction in a way that strengthens both communication and leadership.',
    ],
    focus: ['Technical instruction', 'VPython labs', 'Peer mentorship'],
    sideNote:
      'I enjoy the teaching side because it turns engineering into a conversation, not just a result.',
  },
];

export const courseworkFocus = [
  'ECE 203 Electronics Laboratory',
  'Microprocessors',
  'Circuits',
  'Digital Signal Processing',
  'Computer Systems',
  'Object-Oriented Programming',
  'Semiconductor Physics',
];

export const courseworkByTerm = [
  {
    term: 'Fall 2023',
    credits: '13 credits',
    gpa: '4.000 GPA',
    honor: "Dean's List",
    courses: [
      { code: 'CEM 141', title: 'General Chemistry' },
      { code: 'EGR 100', title: 'Intro to Engineering Design' },
      { code: 'MTH 152H', title: 'Honors Calculus I' },
      { code: 'WRA 195H', title: 'Writing as Inquiry Honors' },
    ],
  },
  {
    term: 'Spring 2024',
    credits: '16 credits',
    gpa: '4.000 GPA',
    honor: "Dean's List",
    courses: [
      { code: 'CEM 161', title: 'Chemistry Laboratory I' },
      { code: 'CSE 231', title: 'Introduction to Programming I' },
      { code: 'GEO 235', title: 'Geography, Environment and Health' },
      { code: 'MTH 133', title: 'Calculus II' },
      { code: 'PHY 183', title: 'Physics for Scientists and Engineers I' },
    ],
  },
  {
    term: 'Fall 2024',
    credits: '14 credits',
    gpa: '3.571 GPA',
    honor: "Dean's List",
    courses: [
      { code: 'CSE 232', title: 'Introduction to Programming II' },
      { code: 'ECE 201', title: 'Circuits and Systems I' },
      { code: 'ECE 230', title: 'Digital Logic Fundamentals' },
      { code: 'MTH 234', title: 'Multivariable Calculus' },
    ],
  },
  {
    term: 'Spring 2025',
    credits: '16 credits',
    gpa: '4.000 GPA',
    honor: "Dean's List",
    courses: [
      { code: 'BS 161', title: 'Cells and Molecules' },
      { code: 'CSE 260', title: 'Discrete Structures in Computer Science' },
      { code: 'ECE 202', title: 'Circuits and Systems II' },
      { code: 'ECE 280', title: 'Electrical Engineering Analysis' },
      { code: 'MTH 235', title: 'Differential Equations' },
    ],
  },
];

export const courseworkProjects = [
  {
    id: 'temperature-controller',
    label: 'ECE 203 Coursework',
    bannerTitle: 'Temperature-Controlled Fan and Warning Lights',
    intro:
      'This ECE 203 build asked me to design a circuit that could sense temperature, convert that analog behavior into something readable, and then drive both warning LEDs and a cooling fan. It became a full system-level exercise in analog conditioning, thresholds, and real hardware response.',
    focusAreas: [
      'ECE 203',
      'Instrumentation amplifier',
      'Comparator thresholds',
      'Motor driver',
    ],
    overviewTitle: 'How the ECE 203 system worked',
    overview:
      'The thermistor was only the starting point. The real challenge was building a signal path that could handle changing room conditions, create a stable and usable operating point, and then split that information into two outputs: one visual and one mechanical. The result was a course project that felt much closer to a complete control system than a single isolated circuit.',
    sections: [
      {
        title: 'Sensing the temperature clearly',
        text: 'I used the NTC thermistor in a measurement bridge so the output could be adjusted around a practical operating point instead of drifting into a useless region. That made the instrumentation amplifier stage much more meaningful, because it was working with a signal that had already been prepared carefully.',
      },
      {
        title: 'Turning analog values into useful behavior',
        text: 'The comparator stages translated the conditioned signal into clean thresholds for the warning lights, while the motor-driver stage used the same temperature information to control fan behavior. That forced me to think about the same input signal in two different ways: readable indication and physical control.',
      },
      {
        title: 'Why it mattered as coursework',
        text: 'This was one of the first times I had to think through a circuit as an entire chain of dependencies. The bridge affected the amplifier, the amplifier affected the thresholds, and all of it ultimately changed how the fan and LEDs behaved on the bench.',
      },
    ],
    takeaway:
      'As ECE 203 coursework, this project made analog design feel practical. It showed me how measurement, amplification, indication, and actuation all need to support each other when the goal is a working system instead of a one-stage demo.',
    gallery: [
      {
        src: assetPath('motor controlled temp sensor.jpg'),
        alt: 'Temperature controller hardware on the bench',
        caption: 'Full bench setup of the temperature-controlled fan and warning-light system during testing.',
      },
      {
        src: assetPath('motor controlled temp sensor 2.jpg'),
        alt: 'Temperature controller close-up from the side',
        caption: 'A closer view of the assembled hardware, showing how the sensing and response stages lived together on the board.',
      },
      {
        src: assetPath('temp sensor to motor.jpg'),
        alt: 'Temperature sensor connected to motor control hardware',
        caption: 'The signal path from thermistor sensing to motor response was the heart of the design.',
      },
      {
        src: assetPath('motor schematic.png'),
        alt: 'Temperature controller schematic',
        caption: 'Schematic view of the project, useful for understanding the bridge, amplification, LED, and motor-driver stages together.',
      },
    ],
  },
  {
    id: 'audio-amplifier',
    label: 'ECE 203 Coursework',
    bannerTitle: 'Stereo Mixer, Equalizer, and Amplifier',
    intro:
      'This ECE 203 project combined multiple analog concepts into one working audio system: taking stereo input, mixing it intelligently, shaping the signal, and amplifying it strongly enough to drive a speaker with a real output.',
    focusAreas: [
      'ECE 203',
      'Stereo summing',
      'Signal conditioning',
      'Power amplification',
    ],
    overviewTitle: 'Why this audio build mattered',
    overview:
      'What made the project valuable was the way it turned separate analog ideas into one signal path. Mixing, filtering, balancing, feedback, and output drive all had to cooperate. Once those stages were chained together, the project stopped feeling like a set of lab exercises and started feeling like a real audio system that had to be tuned and verified stage by stage.',
    sections: [
      {
        title: 'From stereo input to one controllable signal',
        text: 'Because the source began as stereo while the output was a single speaker, the first task was to combine left and right channels into one manageable path. That made the mixing stage more than a formality because it set the quality of everything that followed downstream.',
      },
      {
        title: 'Driving the speaker for real',
        text: 'The project made it obvious that op-amp stages alone are not enough when current demand matters. The power-amplifier section and feedback path were where the circuit became practical, because that was the point where the signal had to do more than just exist on a scope.',
      },
      {
        title: 'What I learned in ECE 203',
        text: 'The test points across the board turned the project into a real debugging exercise. I could inspect the signal at multiple stages, understand where shape or strength changed, and get a much better feel for how full analog systems behave when one block depends on the quality of the one before it.',
      },
    ],
    takeaway:
      'Among my ECE 203 coursework, this one stands out because it tied together mixing, gain, filtering, and output drive in a way that made analog design feel concrete and measurable.',
    gallery: [
      {
        src: assetPath('audio amp.jpg'),
        alt: 'Audio amplifier project on the bench',
        caption: 'The overall bench setup for the stereo mixer and amplifier during testing.',
      },
      {
        src: assetPath('audio amp 2.jpg'),
        alt: 'Audio amplifier close-up',
        caption: 'A closer look at the physical build, where the signal path had to work as a real hardware system.',
      },
      {
        src: assetPath('audio amp 3.jpg'),
        alt: 'Audio amplifier alternate bench view',
        caption: 'Another testing view that captures the wiring density and hands-on nature of the project.',
      },
      {
        src: assetPath('audio amp 4.jpg'),
        alt: 'Audio amplifier hardware and test setup',
        caption: 'Bench instrumentation helped verify how each stage behaved before pushing the final output.',
      },
      {
        src: assetPath('audio circuit.png'),
        alt: 'Audio amplifier schematic',
        caption: 'The circuit view shows how mixing, filtering, and power amplification were organized into one complete path.',
      },
    ],
  },
];

export const projectModules = [
  {
    id: 'embedded-task-scheduler',
    label: 'Resume Project',
    bannerTitle: 'Embedded Task Scheduler (ESP32)',
    intro:
      'This project focused on building the scheduling backbone for an embedded system that has to coordinate sensing, communication, and control without blocking itself. I wanted the system to stay responsive under real timing pressure instead of relying on a simple loop that would eventually get in its own way.',
    focusAreas: [
      'ESP32',
      'Scheduling',
      'Interrupts and timers',
      'Low-latency control',
    ],
    overviewTitle: 'What I built into the scheduler',
    overview:
      'The scheduler was designed to coordinate tasks with different timing needs while keeping the system responsive. Instead of allowing one long-running action to block everything else, I used interrupt-driven and timer-based structure to keep sensing, communication, and control moving predictably.',
    sections: [
      {
        title: 'Coordinating multiple jobs cleanly',
        text: 'A major part of the work was organizing the firmware so sensing, communication, and control could all happen without stepping on each other. That meant thinking carefully about what should be timer-driven, what should be interrupt-driven, and what needed to stay non-blocking.',
      },
      {
        title: 'Reducing latency in practice',
        text: 'The point of the project was not just to make the system organized. It was to make it fast enough to respond when events occurred. Using interrupts and timers made it possible to keep reaction time low and avoid the sluggishness that shows up when everything depends on a single main loop.',
      },
      {
        title: 'Why it matters for larger embedded systems',
        text: 'This project helped me think more like a systems engineer. It was not only about code that works, but code that stays scalable as more tasks, devices, and timing requirements get added.',
      },
    ],
    takeaway:
      'The scheduler project reflects how I like to approach embedded systems: structure the timing first, prevent avoidable blocking, and make the whole design easier to grow without losing responsiveness.',
  },
  {
    id: 'motion-adaptive-audio-system',
    label: 'Resume Project',
    bannerTitle: 'Motion-Adaptive Audio System (Teensy)',
    intro:
      'This project explored how audio output could respond dynamically to motion. Using a Teensy platform and IMU data, I built a system that adapts audio behavior in real time based on user orientation, which made the work as much about responsiveness and timing as it was about sound.',
    focusAreas: [
      'Teensy',
      'IMU sensing',
      'Audio panning',
      'Real-time response',
    ],
    overviewTitle: 'How motion shaped the audio experience',
    overview:
      'The goal was to connect physical orientation data to audio output in a way that felt immediate and stable. That meant building a low-latency path from IMU sensing into real-time audio processing so the sound changed with user movement instead of trailing behind it.',
    sections: [
      {
        title: 'Reading movement fast enough to matter',
        text: 'IMU data only becomes useful in an interactive system if it can be processed quickly and consistently. A big part of the project was making sure the sensing path fed the audio path with low enough latency that the user could actually feel the connection between motion and sound.',
      },
      {
        title: 'Directional audio behavior',
        text: 'Real-time audio panning was the core interaction feature. By adjusting the output based on orientation, the system could simulate directional perception and turn raw motion data into a more immersive audio response.',
      },
      {
        title: 'What the project taught me',
        text: 'This build pushed me to think about embedded audio as a timing problem as much as a signal problem. Sensor data, computation, and audio output all had to cooperate tightly if the interaction was going to feel intentional.',
      },
    ],
    takeaway:
      'The Motion-Adaptive Audio System represents the kind of embedded work I enjoy most: sensing, interpretation, and a real-time output path that has to feel responsive to the user.',
  },
  {
    id: 'embedded-audio-synthesizer',
    label: 'Resume Project',
    bannerTitle: 'Embedded Audio Synthesizer and Signal Analysis System',
    intro:
      'This project combined sound generation, embedded processing, and signal analysis into one workflow. I used a Teensy with an Audio Shield to generate and shape audio in real time, then used MATLAB to analyze the resulting signals more rigorously.',
    focusAreas: [
      'Teensy audio',
      '44.1 kHz processing',
      'Waveform generation',
      'FFT analysis',
    ],
    overviewTitle: 'From synthesis to measurement',
    overview:
      'I built the system to do more than just play sound. It needed to generate waveforms, apply filtering and signal shaping in real time, and then support analysis of those outputs in both the time and frequency domains. That combination made it a useful bridge between embedded implementation and formal signal analysis.',
    sections: [
      {
        title: 'Generating and shaping audio on the device',
        text: 'Using the Teensy and Audio Shield, I implemented waveform generation and configurable filtering at 44.1 kHz. That required thinking carefully about real-time constraints while still keeping the signal-processing path flexible enough to experiment with different sounds and filter behaviors.',
      },
      {
        title: 'Treating the output like data, not just sound',
        text: 'MATLAB analysis was a major part of the project because it gave me a way to examine the generated signals beyond listening alone. Looking at the time domain and the frequency domain helped me evaluate how the synthesizer behaved and how the filtering choices changed the spectrum.',
      },
      {
        title: 'Why the project matters to me',
        text: 'This project sits in a space I really enjoy: embedded implementation backed by deeper analysis. It required both practical firmware thinking and the willingness to verify results with tools that expose what the signal is actually doing.',
      },
    ],
    takeaway:
      'The synthesizer project reflects the mix I want more of in my work: embedded systems, real-time processing, and enough analysis to understand behavior instead of just hoping it sounds right.',
  },
];

export const artPieces = [
  {
    src: assetPath('elephant painting.jpg'),
    alt: 'Elephant painting at sunset',
    category: 'paint',
    title: 'Elephant Painting',
  },
  {
    src: assetPath('paint art.jpg'),
    alt: 'Colorful painted artwork',
    category: 'paint',
    title: 'Color Study',
  },
  {
    src: assetPath('painting 1.jpg'),
    alt: 'Painted artwork study one',
    category: 'paint',
    title: 'Painting Study I',
  },
  {
    src: assetPath('painting 2.jpg'),
    alt: 'Painted artwork study two',
    category: 'paint',
    title: 'Painting Study II',
  },
  {
    src: assetPath('painting 3.jpg'),
    alt: 'Painted artwork study three',
    category: 'paint',
    title: 'Painting Study III',
  },
  {
    src: assetPath('self portrait pencil.jpg'),
    alt: 'Self portrait pencil drawing',
    category: 'pencil',
    title: 'Self Portrait',
  },
  {
    src: assetPath('elephant pencil.jpg'),
    alt: 'Elephant pencil drawing',
    category: 'pencil',
    title: 'Elephant Sketch',
  },
  {
    src: assetPath('kofi annan portrait pencil.jpg'),
    alt: 'Kofi Annan portrait pencil drawing',
    category: 'pencil',
    title: 'Portrait Study',
  },
  {
    src: assetPath('photo art.jpg'),
    alt: 'Photo-based art piece',
    category: 'mixed',
    title: 'Photo Art',
  },
  {
    src: assetPath('shadow art.jpg'),
    alt: 'Shadow art composition',
    category: 'mixed',
    title: 'Shadow Study',
  },
  {
    src: assetPath('random art.jpg'),
    alt: 'Experimental mixed-media art piece',
    category: 'mixed',
    title: 'Experimental Piece',
  },
];

export const artFilters = [
  { id: 'all', label: 'All work' },
  { id: 'paint', label: 'Paint' },
  { id: 'pencil', label: 'Pencil' },
  { id: 'mixed', label: 'Mixed media' },
];

export const contactDetails = {
  eyebrow: 'Contact me',
  title: "If you're building something real, I'd love to hear about it.",
  intro:
    'I am always open to conversations about research, embedded systems, circuit design, internships, and creative technical work. If you have a project that needs someone who enjoys the hard part, reach out.',
  catchphrases: [
    'Need someone who likes turning messy ideas into working hardware?',
    'Want to talk research, circuits, or embedded systems without the small talk first?',
    'Looking for a teammate who enjoys debugging as much as designing?',
  ],
  links: [
    {
      label: 'Email',
      value: 'adjaklos@msu.edu',
      href: 'mailto:adjaklos@msu.edu',
    },
    {
      label: 'Phone',
      value: '(517) 490-1161',
      href: 'tel:+15174901161',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/samuel-adjaklo',
      href: 'https://www.linkedin.com/in/samuel-adjaklo',
    },
    {
      label: 'GitHub',
      value: 'github.com/adjaklos',
      href: 'https://github.com/adjaklos',
    },
  ],
};

export const searchItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Coursework', href: '/coursework' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Art', href: '/art' },
  { label: 'Contact', href: '/#contact' },
  { label: 'HATLabs Research', href: '/experience#hatlabs' },
  { label: 'Fraunhofer', href: '/experience#fraunhofer' },
  { label: 'Undergraduate Learning Assistant', href: '/experience#learning-assistant' },
  { label: 'Temperature-Controlled Fan and Warning Lights', href: '/coursework#temperature-controller' },
  { label: 'Stereo Mixer, Equalizer, and Amplifier', href: '/coursework#audio-amplifier' },
  { label: 'Embedded Task Scheduler', href: '/projects#embedded-task-scheduler' },
  { label: 'Motion-Adaptive Audio System', href: '/projects#motion-adaptive-audio-system' },
  { label: 'Embedded Audio Synthesizer and Signal Analysis System', href: '/projects#embedded-audio-synthesizer' },
];
