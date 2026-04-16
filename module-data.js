(() => {
  const c = 3e8;

  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function round(value, dp = 3) {
    const factor = Math.pow(10, dp);
    return Math.round(value * factor) / factor;
  }

  const topics = [
    {
      id: "electromagnetics",
      title: "Electromagnetics",
      pages: [
        {
          title: "Page 1 - Field Model and Wave Formation",
          content: [
            "Electromagnetics starts from a field view of physics: electric fields describe force on charge, magnetic fields describe force on moving charge, and both are coupled in space and time. In practical engineering terms, this means voltage and current are not the only objects you should track. The underlying fields carry the real energy and determine whether a system radiates, stores energy, or transmits it efficiently. A good first mental model is that field sources create local disturbances, and those disturbances propagate according to material properties. Once you think in terms of fields, a lot of results from circuits, transmission lines, and antennas become consistent instead of feeling like separate formulas.",
            "Maxwell equations summarize this behavior. Gauss law links electric flux to charge density. Gauss law for magnetism says magnetic monopoles are not observed, so magnetic flux lines form closed loops. Faraday law shows changing magnetic field induces electric field. Ampere-Maxwell law shows current and changing electric field induce magnetic field. Together they allow self-sustaining wave propagation: changing electric field generates magnetic field, and changing magnetic field generates electric field. That loop is why electromagnetic waves can travel through vacuum. In a medium, the same loop exists but propagation speed and attenuation are modified by permittivity, permeability, and conductivity.",
            "From these equations, the wave equation is derived and gives the relationship between frequency, wavelength, and speed. In free space, speed is about 3e8 m/s. In materials, speed is reduced roughly by square root of relative permittivity. Engineers often switch between time-domain and phasor-domain representations. Time domain gives direct physical intuition, while phasor domain turns derivatives into algebraic multipliers and simplifies sinusoidal steady-state analysis. This lets you solve boundary-value problems, reflection problems, and polarization behavior with manageable algebra instead of repeated differential equations.",
            "Power flow is represented by the Poynting vector, which points in the direction of net energy transfer. Its magnitude shows power density in W/m^2. For a uniform plane wave, electric and magnetic fields are orthogonal and the ratio E/H equals medium wave impedance. In free space this is about 377 ohm. That number appears repeatedly in antenna gain calculations and coupling estimates. Strong conceptual fluency comes from always asking three linked questions: where does energy originate, where does it propagate, and what boundary conditions force redirection, storage, or dissipation."
          ]
        },
        {
          title: "Page 2 - Boundary Conditions, Polarization, and Material Effects",
          content: [
            "When a wave reaches an interface, boundary conditions control what is continuous and what changes. Tangential electric field continuity, tangential magnetic field jumps with surface current, and normal components relate to surface charge and magnetic flux rules. These constraints produce reflection and transmission coefficients. If impedances are mismatched, reflected power appears. If matched, most power transmits. This same logic appears in transmission lines and antenna feeds, so the boundary-condition mindset is a bridge topic that unifies the module.",
            "Polarization describes the electric field orientation over time at a fixed point. Linear polarization keeps direction fixed, circular polarization rotates with constant magnitude, and elliptical polarization is the general case. Polarization mismatch produces immediate link loss. If one antenna is vertical linear and the other horizontal linear, ideal coupling can drop to nearly zero. Circular to linear mismatch commonly causes around 3 dB loss in ideal orientation. In real links, mounting error and multipath further perturb this. Correct polarization planning is therefore a design parameter, not an afterthought.",
            "Material response determines attenuation and phase shift. Lossless dielectrics mainly alter phase velocity. Conductive materials convert wave energy into heat, causing attenuation with depth. Skin effect in conductors pushes current near the surface at higher frequency, increasing effective resistance and conductor loss. This is why RF interconnect design cares about plating, roughness, and conductor geometry. Permittivity also influences field confinement and effective wavelength, which in turn changes resonant lengths for patch antennas and guided structures.",
            "From a systems perspective, electromagnetics is about controlling coupling: desired coupling to transmit information or power, and suppressed coupling to avoid interference. Shielding, grounding, filtering, and geometry control are all field-engineering tasks. If you keep track of source strength, path characteristics, and receiving aperture, you can reason from first principles before applying specialized formulas."
          ]
        },
        {
          title: "Page 3 - Engineering Workflow and Problem Solving Strategy",
          content: [
            "A practical EM workflow starts with operating frequency and required bandwidth, because they determine wavelength scale and sensitivity to dimensions. Next map the environment: free space, dielectric-loaded region, enclosure, cable, or mixed path. Identify dominant mechanisms: radiation, guided propagation, near-field coupling, or quasistatic behavior. Then pick model fidelity: closed-form equations for rapid estimates, circuit equivalents for interface design, or full-wave simulation when geometry is critical. This layered workflow avoids over-modeling early and under-modeling late.",
            "Dimensional analysis is a reliable check. Every expression should resolve to expected units: power in watts, impedance in ohm, field in V/m or A/m, power density in W/m^2. Order-of-magnitude checks catch many mistakes quickly. For example, if a far-field power density estimate implies impossible received power, revisit gain assumptions, distance units, or dB arithmetic. EM mistakes often come from mixing linear and logarithmic values, or from inconsistent frequency units (Hz versus MHz versus GHz).",
            "In exam and design settings, solve in a fixed sequence: list knowns with units, write governing formula, substitute carefully, compute, and interpret physically. Interpretation is essential. A reflection coefficient magnitude near one means high mismatch, not just a number. A small aperture relative to wavelength means poor directivity potential. A large electrical size enables narrower beams but may increase sidelobe complexity. This interpretation layer is what converts calculation into engineering judgment.",
            "As you progress into antennas and transmission lines, continue mapping each new formula back to field behavior. The module is easier when you see all sections as one story: fields create waves, boundaries create reflections, guided structures control transport, and antennas convert guided energy to radiation and back."
          ]
        }
      ],
      media: {
        images: [
          {
            title: "Electromagnetic wave orientation diagram",
            url: "https://upload.wikimedia.org/wikipedia/commons/9/99/EM-Wave.gif",
            source: "Wikimedia Commons"
          },
          {
            title: "Poynting vector visualization",
            url: "https://upload.wikimedia.org/wikipedia/commons/2/20/Poynting_vectors_of_DC_circuit.svg",
            source: "Wikimedia Commons"
          }
        ],
        animations: [
          {
            title: "PhET Wave Interference Simulation",
            url: "https://phet.colorado.edu/en/simulations/wave-interference"
          }
        ],
        videos: [
          {
            title: "MIT OCW Electromagnetics Lecture",
            youtubeId: "Qyyx1i4QdPk"
          }
        ]
      },
      flashcards: [
        { front: "Define wave impedance.", back: "Wave impedance is E/H for a propagating wave in a medium." },
        { front: "What does Faraday law state?", back: "Time-varying magnetic flux induces electric field circulation." },
        { front: "What is polarization?", back: "Time behavior and orientation of electric field vector." },
        { front: "What is Poynting vector?", back: "Vector S = E x H representing power flow density." }
      ]
    },
    {
      id: "transmission-lines",
      title: "Transmission Lines",
      pages: [
        {
          title: "Page 1 - Why Distributed Models Matter",
          content: [
            "Transmission lines are required when conductor length is not electrically short relative to wavelength. In low-frequency lumped circuits, voltage and current are approximately uniform along a node. At higher frequency or longer length, phase changes along the structure become significant, so voltage and current vary with position. The distributed model captures this with per-unit-length R, L, G, C parameters. These parameters create propagation constant and characteristic impedance, which govern attenuation, phase shift, and reflections.",
            "Characteristic impedance Z0 is the ratio of voltage to current for a forward-traveling wave on the line. It is set by geometry and material, not by load. If load impedance differs from Z0, reflected wave appears with coefficient Gamma = (ZL - Z0)/(ZL + Z0). The reflected wave combines with incident wave and forms standing-wave patterns. Engineers detect mismatch using return loss, VSWR, or direct reflection coefficient. Good matching minimizes reflected power and improves delivered energy, signal integrity, and power amplifier stability.",
            "Propagation velocity depends on effective dielectric properties. In many cables, velocity is less than c and captured by velocity factor. Delay is length divided by velocity, which becomes critical in digital timing, phased arrays, and RF phase matching. Designers sometimes think only in frequency, but time delay and phase are equally important because filters, couplers, and feed networks rely on controlled phase relationships.",
            "Practical line types include coaxial cable, twin-lead, microstrip, stripline, and waveguide variants for higher frequencies. Each offers trade-offs in loss, shielding, manufacturability, and integration. Coax gives strong shielding and predictable performance. Microstrip supports compact PCB integration but radiates more and depends strongly on stack-up accuracy. Understanding these trade-offs lets you choose the right structure before detailed optimization."
          ]
        },
        {
          title: "Page 2 - Reflection, Matching, and Smith Chart Thinking",
          content: [
            "Reflection analysis starts with normalized impedance and coefficient transformations along the line. Magnitude of reflection coefficient stays constant on a lossless line while phase rotates with position. This explains why impedance seen at one point can differ dramatically from impedance at another even with same load. Quarter-wave sections are especially useful because they invert impedance and can transform between two real impedances when designed at a target frequency.",
            "Matching strategies include single-section transformers, lumped L networks, stubs, and multi-section broadband transformers. Each has bandwidth limits and tolerance sensitivity. Narrowband systems can use precise quarter-wave solutions. Broadband systems often require multi-section or optimization-driven matching. In power transfer systems, matching maximizes delivered power. In low-noise receiver front ends, matching may be tuned for noise figure rather than pure power transfer. Context matters when selecting matching goals.",
            "Smith chart is a geometric representation of normalized impedance and reflection coefficient. Even when software is used, conceptual Smith chart understanding is valuable because it gives immediate visibility into whether a movement corresponds to adding series reactance, shunt susceptance, or electrical length. It also helps avoid algebra mistakes and offers intuition about attainable matching with limited network elements.",
            "Loss introduces additional considerations. As attenuation increases, reflected waves shrink as they propagate back, so mismatch measured at source may appear smaller than mismatch at load. This can hide problems when only source-end readings are used. Good workflows include both analytical prediction and strategic measurement points."
          ]
        },
        {
          title: "Page 3 - Measurement, Design Robustness, and Real Hardware",
          content: [
            "Real transmission-line design is constrained by tolerance, connectors, bends, vias, and discontinuities. Every transition can add parasitic capacitance or inductance, creating local mismatch. Layout discipline, reference-plane continuity, and controlled impedance fabrication reduce these effects. In high-speed and RF boards, return current path integrity is as important as trace impedance because broken return paths force field spreading and radiation.",
            "Measurement tools include TDR, VNA, and scalar power measurements. TDR reveals impedance versus distance and is excellent for locating discontinuities. VNA provides S-parameters across frequency and directly quantifies return loss and insertion loss. Interpreting results requires calibration awareness and fixture de-embedding when required. Good engineers compare measurement with model and update assumptions iteratively rather than treating either as perfect.",
            "Loss mechanisms include conductor loss, dielectric loss, and radiation loss. Conductor loss rises with frequency due to skin effect and roughness. Dielectric loss depends on tangent delta and electric field distribution. Radiation loss grows when structures are poorly confined or when discontinuities become efficient radiators. Thermal considerations also matter in power lines because temperature shifts resistance and can alter characteristic behavior.",
            "Robust line design means meeting performance despite manufacturing spread and operating variation. Monte Carlo analysis, tolerance budgeting, and margining are not optional in production systems. A line that works only at nominal dimensions is not production-ready. The final target is repeatable behavior across boards, cables, and environmental conditions."
          ]
        }
      ],
      media: {
        images: [
          {
            title: "Standing wave pattern illustration",
            url: "https://upload.wikimedia.org/wikipedia/commons/5/59/Standing_wave_ratio_on_transmission_line.svg",
            source: "Wikimedia Commons"
          },
          {
            title: "Smith chart example",
            url: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Smith_chart_gen.svg",
            source: "Wikimedia Commons"
          }
        ],
        animations: [
          {
            title: "Falstad Transmission Line Simulator",
            url: "https://www.falstad.com/tlines/"
          }
        ],
        videos: [
          {
            title: "Transmission Lines Playlist",
            youtubeId: "3M4B6m6I9fI"
          }
        ]
      },
      flashcards: [
        { front: "Reflection coefficient formula", back: "Gamma = (ZL - Z0) / (ZL + Z0)." },
        { front: "VSWR relation", back: "VSWR = (1 + |Gamma|) / (1 - |Gamma|)." },
        { front: "Quarter-wave transformer impedance", back: "Zt = sqrt(Z0 x ZL)." },
        { front: "When use distributed model?", back: "When line length is not electrically negligible." }
      ]
    },
    {
      id: "antennas",
      title: "Antennas",
      pages: [
        {
          title: "Page 1 - Radiation Basics and Pattern Language",
          content: [
            "An antenna is a transducer between guided electromagnetic energy and radiated energy. In transmit mode, current distribution on conductors creates time-varying fields that detach and propagate outward. In receive mode, incident fields induce currents and voltages that can be processed by circuitry. Antenna behavior is therefore rooted in field distribution and boundary conditions, not only in a single gain number.",
            "Radiation pattern describes angular distribution of radiated power. Main lobe indicates primary direction, sidelobes indicate undesired radiation, and nulls indicate weak directions. Beamwidth quantifies angular spread of main lobe and relates to resolution and pointing tolerance. High directivity usually narrows beamwidth, which can improve link margin but increases alignment sensitivity.",
            "Gain combines directivity and efficiency. Directivity captures shape of pattern; efficiency accounts for mismatch and losses. A high-directivity antenna with poor efficiency may still deliver modest gain. Engineers should inspect both terms separately when diagnosing performance. For example, metal loss, substrate loss, and feed mismatch can lower efficiency even when simulated pattern looks strong.",
            "Polarization compatibility between transmitting and receiving antennas is critical. Alignment errors and multipath depolarization reduce effective received power. In practical systems, environment and motion may motivate circular polarization or diversity strategies to improve robustness."
          ]
        },
        {
          title: "Page 2 - Link Budget, Aperture, and Frequency Trade-offs",
          content: [
            "Friis transmission equation links transmit power, antenna gains, wavelength, and distance to received power in free space. It is the starting point for line-of-sight link budgeting. In logarithmic form, engineers often work with dBm, dBi, and dB losses. Consistent units are essential. Frequency appears through wavelength and path loss behavior, creating direct trade-offs between antenna size and free-space attenuation.",
            "Effective aperture is the receiving area implied by antenna gain. Larger aperture generally captures more power from an incident wave. For a given gain, aperture scales with wavelength squared, so moving to lower frequency can enlarge physical antenna size requirements. This is why compact high-gain antennas are easier at shorter wavelength, while long-wavelength systems need larger structures for comparable directivity.",
            "System-level link design includes margins for fading, pointing error, polarization mismatch, connector loss, and atmospheric effects. A mathematically sufficient Friis calculation without margin often fails in field operation. Reliable links require deterministic and statistical margin budgeting. This includes understanding deployment geometry and worst-case rather than average scenarios.",
            "Antenna placement on platforms strongly influences effective pattern and impedance. Nearby conductors, enclosures, and users can detune resonances and distort beams. Co-design between RF hardware and mechanical constraints is usually required to preserve performance."
          ]
        },
        {
          title: "Page 3 - Practical Antenna Engineering and Validation",
          content: [
            "Practical antenna development cycles through concept, simulation, prototype, and measurement. Early concepts use approximate current distributions and resonant length rules. Simulation refines geometry and feed. Prototype verifies manufacturability and reveals parasitic effects not fully captured in ideal models. Measurement then validates return loss, efficiency, gain, and pattern. Disagreement between simulation and measurement is expected and should drive model updates.",
            "Common antenna classes include dipoles, monopoles, patches, loops, helical antennas, horns, and arrays. Dipoles are simple references. Patches integrate well on PCBs but can be narrowband. Arrays increase gain and provide steering capability at cost of feed complexity. Choice depends on required bandwidth, polarization, profile, cost, and environment.",
            "Impedance matching at the feed is important but not the full story. A good S11 result does not guarantee good radiation efficiency or desired pattern. Always pair impedance metrics with radiation metrics. In constrained products, you often trade one metric against another, so optimization targets should be set by system requirements rather than isolated lab values.",
            "Validation should include orientation sweeps, enclosure-on measurements, and channel-aware trials when relevant. A design that performs in open bench conditions may fail in realistic multipath or mounting conditions. Robust antenna engineering is therefore both electromagnetic and system integration work."
          ]
        }
      ],
      media: {
        images: [
          {
            title: "Dipole radiation pattern",
            url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Dipole_radiation_pattern.svg",
            source: "Wikimedia Commons"
          },
          {
            title: "Directional antenna concept",
            url: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Antenna_pattern.svg",
            source: "Wikimedia Commons"
          }
        ],
        animations: [
          {
            title: "Radiation pattern animation",
            url: "https://www.antenna-theory.com/basics/radpattern.php"
          }
        ],
        videos: [
          {
            title: "Antenna Theory Intro",
            youtubeId: "7yaWfVZ2xC4"
          }
        ]
      },
      flashcards: [
        { front: "Gain vs directivity", back: "Gain = efficiency x directivity." },
        { front: "Friis core relationship", back: "Received power scales with Gt, Gr, and (lambda / 4piR)^2." },
        { front: "Effective aperture relation", back: "Ae = G lambda^2 / (4pi)." },
        { front: "Why sidelobes matter", back: "They waste power and increase interference susceptibility." }
      ]
    }
  ];

  const questionTemplates = [
    { id: "wavelength-from-frequency", topic: "electromagnetics" },
    { id: "frequency-from-wavelength", topic: "electromagnetics" },
    { id: "wave-impedance-from-fields", topic: "electromagnetics" },
    { id: "reflection-coefficient", topic: "transmission-lines" },
    { id: "vswr-from-gamma", topic: "transmission-lines" },
    { id: "return-loss-from-gamma", topic: "transmission-lines" },
    { id: "quarter-wave-transformer", topic: "transmission-lines" },
    { id: "line-delay", topic: "transmission-lines" },
    { id: "fspl-db", topic: "antennas" },
    { id: "friis-rx-power", topic: "antennas" },
    { id: "effective-aperture", topic: "antennas" },
    { id: "polarization-loss", topic: "antennas" }
  ];

  function templateSolver(templateId) {
    if (templateId === "wavelength-from-frequency") {
      const fMHz = randInt(80, 2400);
      const fHz = fMHz * 1e6;
      const lambda = c / fHz;
      return {
        prompt: `At frequency ${fMHz} MHz, find wavelength in meters (free space).`,
        answer: `${round(lambda, 4)} m`,
        steps: [
          "Use lambda = c / f.",
          `c = 3e8 m/s, f = ${fMHz} x 1e6 Hz.`,
          `lambda = 3e8 / ${fHz} = ${round(lambda, 4)} m.`
        ]
      };
    }
    if (templateId === "frequency-from-wavelength") {
      const lambda = round(randInt(5, 150) / 100, 2);
      const f = c / lambda;
      return {
        prompt: `A wave has wavelength ${lambda} m. Find frequency in MHz.`,
        answer: `${round(f / 1e6, 3)} MHz`,
        steps: [
          "Use f = c / lambda.",
          `f = 3e8 / ${lambda}.`,
          `f = ${round(f / 1e6, 3)} MHz.`
        ]
      };
    }
    if (templateId === "wave-impedance-from-fields") {
      const e = randInt(20, 450);
      const h = round(randInt(5, 120) / 10, 1);
      const z = e / h;
      return {
        prompt: `Given E = ${e} V/m and H = ${h} A/m, calculate wave impedance.`,
        answer: `${round(z, 3)} ohm`,
        steps: [
          "Use eta = E / H.",
          `eta = ${e} / ${h}.`,
          `eta = ${round(z, 3)} ohm.`
        ]
      };
    }
    if (templateId === "reflection-coefficient") {
      const z0 = randInt(30, 90);
      const zl = randInt(5, 200);
      const gamma = (zl - z0) / (zl + z0);
      return {
        prompt: `For Z0 = ${z0} ohm and ZL = ${zl} ohm, calculate reflection coefficient.`,
        answer: `${round(gamma, 4)}`,
        steps: [
          "Use Gamma = (ZL - Z0) / (ZL + Z0).",
          `Gamma = (${zl} - ${z0}) / (${zl} + ${z0}).`,
          `Gamma = ${round(gamma, 4)}.`
        ]
      };
    }
    if (templateId === "vswr-from-gamma") {
      const gamma = round(randInt(5, 85) / 100, 2);
      const vswr = (1 + gamma) / (1 - gamma);
      return {
        prompt: `If |Gamma| = ${gamma}, compute VSWR.`,
        answer: `${round(vswr, 3)}`,
        steps: [
          "Use VSWR = (1 + |Gamma|) / (1 - |Gamma|).",
          `VSWR = (1 + ${gamma}) / (1 - ${gamma}).`,
          `VSWR = ${round(vswr, 3)}.`
        ]
      };
    }
    if (templateId === "return-loss-from-gamma") {
      const gamma = round(randInt(3, 95) / 100, 2);
      const rl = -20 * Math.log10(gamma);
      return {
        prompt: `If |Gamma| = ${gamma}, find return loss in dB.`,
        answer: `${round(rl, 3)} dB`,
        steps: [
          "Use RL = -20 log10(|Gamma|).",
          `RL = -20 log10(${gamma}).`,
          `RL = ${round(rl, 3)} dB.`
        ]
      };
    }
    if (templateId === "quarter-wave-transformer") {
      const z0 = randInt(40, 75);
      const zl = randInt(20, 180);
      const zt = Math.sqrt(z0 * zl);
      return {
        prompt: `Design a quarter-wave transformer for Z0 = ${z0} ohm and ZL = ${zl} ohm. Find Zt.`,
        answer: `${round(zt, 3)} ohm`,
        steps: [
          "Use Zt = sqrt(Z0 x ZL).",
          `Zt = sqrt(${z0} x ${zl}).`,
          `Zt = ${round(zt, 3)} ohm.`
        ]
      };
    }
    if (templateId === "line-delay") {
      const length = randInt(2, 80);
      const vf = round(randInt(55, 90) / 100, 2);
      const vp = vf * c;
      const td = length / vp;
      return {
        prompt: `A line is ${length} m long with velocity factor ${vf}. Find one-way delay.`,
        answer: `${round(td * 1e9, 3)} ns`,
        steps: [
          "Compute phase velocity vp = vf x c.",
          `vp = ${vf} x 3e8 = ${round(vp, 0)} m/s.`,
          `Delay td = L / vp = ${length} / ${round(vp, 0)} = ${round(td * 1e9, 3)} ns.`
        ]
      };
    }
    if (templateId === "fspl-db") {
      const fMHz = randInt(400, 5800);
      const dKm = round(randInt(5, 300) / 10, 1);
      const fspl = 32.44 + 20 * Math.log10(fMHz) + 20 * Math.log10(dKm);
      return {
        prompt: `Find free-space path loss at ${fMHz} MHz over ${dKm} km.`,
        answer: `${round(fspl, 3)} dB`,
        steps: [
          "Use FSPL = 32.44 + 20log10(fMHz) + 20log10(dKm).",
          `FSPL = 32.44 + 20log10(${fMHz}) + 20log10(${dKm}).`,
          `FSPL = ${round(fspl, 3)} dB.`
        ]
      };
    }
    if (templateId === "friis-rx-power") {
      const pt = randInt(0, 35);
      const gt = randInt(1, 20);
      const gr = randInt(1, 20);
      const fMHz = randInt(700, 5000);
      const dKm = round(randInt(10, 200) / 10, 1);
      const fspl = 32.44 + 20 * Math.log10(fMHz) + 20 * Math.log10(dKm);
      const pr = pt + gt + gr - fspl;
      return {
        prompt: `Given Pt=${pt} dBm, Gt=${gt} dBi, Gr=${gr} dBi, f=${fMHz} MHz, d=${dKm} km, find Pr(dBm).`,
        answer: `${round(pr, 3)} dBm`,
        steps: [
          "Compute FSPL first.",
          `FSPL = 32.44 + 20log10(${fMHz}) + 20log10(${dKm}) = ${round(fspl, 3)} dB.`,
          `Pr = Pt + Gt + Gr - FSPL = ${pt} + ${gt} + ${gr} - ${round(fspl, 3)} = ${round(pr, 3)} dBm.`
        ]
      };
    }
    if (templateId === "effective-aperture") {
      const gDbi = randInt(2, 24);
      const fGHz = round(randInt(8, 120) / 10, 1);
      const gLin = Math.pow(10, gDbi / 10);
      const fHz = fGHz * 1e9;
      const lambda = c / fHz;
      const ae = gLin * lambda * lambda / (4 * Math.PI);
      return {
        prompt: `For antenna gain ${gDbi} dBi at ${fGHz} GHz, find effective aperture.`,
        answer: `${round(ae, 6)} m^2`,
        steps: [
          `Convert gain: G = 10^(GdBi/10) = 10^(${gDbi}/10) = ${round(gLin, 4)}.`,
          `lambda = c/f = 3e8 / ${fHz} = ${round(lambda, 5)} m.`,
          `Ae = G lambda^2 / (4pi) = ${round(ae, 6)} m^2.`
        ]
      };
    }
    const theta = randInt(5, 85);
    const plf = Math.pow(Math.cos(theta * Math.PI / 180), 2);
    const loss = -10 * Math.log10(plf);
    return {
      prompt: `For linear polarization mismatch angle ${theta} deg, find PLF and mismatch loss.`,
      answer: `PLF=${round(plf, 4)}, loss=${round(loss, 3)} dB`,
      steps: [
        "Use PLF = cos^2(theta).",
        `PLF = cos^2(${theta}) = ${round(plf, 4)}.`,
        `Loss = -10log10(PLF) = ${round(loss, 3)} dB.`
      ]
    };
  }

  function generateQuestionBank(count = 120) {
    const bank = [];
    for (let i = 0; i < count; i += 1) {
      const template = questionTemplates[i % questionTemplates.length];
      const solved = templateSolver(template.id);
      bank.push({
        id: i + 1,
        topic: template.topic,
        templateId: template.id,
        prompt: solved.prompt,
        answer: solved.answer,
        steps: solved.steps
      });
    }
    return bank;
  }

  const quizQuestions = [
    {
      id: 1,
      topic: "electromagnetics",
      question: "What is the free-space wavelength at 300 MHz?",
      options: ["0.5 m", "1.0 m", "10 m", "30 m"],
      correctAnswerIndex: 1,
      steps: [
        "Use lambda = c / f.",
        "lambda = 3e8 / 3e8 = 1 m."
      ]
    },
    {
      id: 2,
      topic: "electromagnetics",
      question: "If E = 12 V/m and H = 0.032 A/m for a plane wave, what is the power density?",
      options: ["0.384 W/m^2", "6.0 W/m^2", "12.0 W/m^2", "377 W/m^2"],
      correctAnswerIndex: 1,
      steps: [
        "Poynting vector magnitude S = E x H for a uniform plane wave.",
        "S = 12 x 0.032 = 0.384 W/m^2."
      ]
    },
    {
      id: 3,
      topic: "electromagnetics",
      question: "What is the approximate free-space wave impedance?",
      options: ["50 ohm", "120 ohm", "240 ohm", "377 ohm"],
      correctAnswerIndex: 3,
      steps: [
        "Wave impedance eta0 = sqrt(mu0/eps0) ≈ 377 ohm."
      ]
    },
    {
      id: 4,
      topic: "electromagnetics",
      question: "Two antennas are orthogonally linearly polarized. What is the ideal polarization loss factor (PLF)?",
      options: ["0 (complete mismatch)", "0.25", "0.5", "1 (perfect match)"],
      correctAnswerIndex: 0,
      steps: [
        "Orthogonal linear polarizations have PLF = 0, implying very poor coupling."
      ]
    },
    {
      id: 5,
      topic: "electromagnetics",
      question: "A wave has wavelength 0.6 m in free space. What is the frequency?",
      options: ["200 MHz", "300 MHz", "400 MHz", "500 MHz"],
      correctAnswerIndex: 3,
      steps: [
        "Use f = c / lambda.",
        "f = 3e8 / 0.6 ≈ 5e8 Hz = 500 MHz."
      ]
    },
    {
      id: 6,
      topic: "transmission-lines",
      question: "For Z0 = 50 ohm and ZL = 100 ohm, what is reflection coefficient magnitude?",
      options: ["0.33", "0.5", "1.0", "0.1"],
      correctAnswerIndex: 0,
      steps: [
        "Gamma = (ZL - Z0) / (ZL + Z0).",
        "Gamma = (100 - 50) / (150) ≈ 0.33."
      ]
    },
    {
      id: 7,
      topic: "transmission-lines",
      question: "If |Gamma| = 0.2, what is VSWR?",
      options: ["1.0", "1.25", "1.5", "2.0"],
      correctAnswerIndex: 2,
      steps: [
        "VSWR = (1 + |Gamma|) / (1 - |Gamma|).",
        "VSWR = 1.2 / 0.8 = 1.5."
      ]
    },
    {
      id: 8,
      topic: "transmission-lines",
      question: "Quarter-wave transformer to match 50 ohm to 100 ohm uses what impedance?",
      options: ["35.4 ohm", "50.0 ohm", "70.7 ohm", "90.9 ohm"],
      correctAnswerIndex: 2,
      steps: [
        "Zt = sqrt(Z0 x ZL) = sqrt(50 x 100) ≈ 70.7 ohm."
      ]
    },
    {
      id: 9,
      topic: "transmission-lines",
      question: "A 10 m line with velocity factor 0.67 has one-way delay of approximately:",
      options: ["10 ns", "25 ns", "50 ns", "100 ns"],
      correctAnswerIndex: 2,
      steps: [
        "vp = vf x c = 0.67 x 3e8 ≈ 2.01e8 m/s.",
        "Delay = length / vp = 10 / 2.01e8 ≈ 50 ns."
      ]
    },
    {
      id: 10,
      topic: "transmission-lines",
      question: "If |Gamma| = 0.1, what is the return loss?",
      options: ["-10 dB", "10 dB", "20 dB", "30 dB"],
      correctAnswerIndex: 2,
      steps: [
        "RL = -20 log10(|Gamma|) = -20 log10(0.1) = 20 dB."
      ]
    },
    {
      id: 11,
      topic: "antennas",
      question: "Free-space path loss at 1 GHz over 10 km is approximately:",
      options: ["82 dB", "92 dB", "102 dB", "112 dB"],
      correctAnswerIndex: 3,
      steps: [
        "FSPL = 32.44 + 20log10(fMHz) + 20log10(dKm).",
        "FSPL = 32.44 + 20log10(1000) + 20log10(10) ≈ 112 dB."
      ]
    },
    {
      id: 12,
      topic: "antennas",
      question: "Using Friis, Pt = 20 dBm, Gt = 3 dBi, Gr = 3 dBi, and FSPL = 100 dB. What is Pr?",
      options: ["-80 dBm", "-74 dBm", "-60 dBm", "-40 dBm"],
      correctAnswerIndex: 1,
      steps: [
        "Pr = Pt + Gt + Gr - FSPL.",
        "Pr = 20 + 3 + 3 - 100 = -74 dBm."
      ]
    },
    {
      id: 13,
      topic: "antennas",
      question: "For 10 dBi gain at 2.4 GHz, which effective aperture is closest?",
      options: ["0.001 m^2", "0.006 m^2", "0.012 m^2", "0.024 m^2"],
      correctAnswerIndex: 2,
      steps: [
        "lambda = 3e8 / 2.4e9 ≈ 0.125 m.",
        "Ae = G lambda^2 / (4pi) with Glin=10 gives ≈ 0.012 m^2."
      ]
    },
    {
      id: 14,
      topic: "antennas",
      question: "Polarization mismatch at 45° between linear antennas causes what loss?",
      options: ["0 dB", "1.5 dB", "3 dB", "6 dB"],
      correctAnswerIndex: 2,
      steps: [
        "PLF = cos^2(45°) = 0.5, so loss = -10log10(0.5) ≈ 3 dB."
      ]
    },
    {
      id: 15,
      topic: "antennas",
      question: "Increasing antenna gain by 3 dB does what to effective aperture?",
      options: ["Halves it", "No change", "Doubles it", "Triples it"],
      correctAnswerIndex: 2,
      steps: [
        "3 dB gain increase doubles linear gain.",
        "Effective aperture is proportional to linear gain, so it doubles."
      ]
    }
  ];

  window.ModuleData = {
    topics,
    questionTemplates,
    quizQuestions,
    generateQuestionBank
  };
})(); 
