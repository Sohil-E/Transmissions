window.ModuleData = {
  topics: [
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
  ],
  questionTemplates: [
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
  ]
};
