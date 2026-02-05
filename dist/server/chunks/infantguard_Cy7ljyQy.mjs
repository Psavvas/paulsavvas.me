import { t as createVNode, aD as Fragment, aE as __astro_tag_component__ } from './astro/server_fhXJnTM4.mjs';

const frontmatter = {
  "title": "InfantGuard",
  "summary": "Infant Guard is a fully integrated, Arduino-driven safety platform engineered to detect forgotten infants in vehicles and escalate alerts before temperatures reach life-threatening levels.",
  "tags": ["Arduino", "IoT", "Safety", "Hardware"],
  "year": "2026",
  "links": [{
    "label": "Source Code",
    "href": "https://github.com/psavvas/infantguard",
    "primary": true
  }, {
    "label": "Raw Data & Science Fair Forms",
    "href": "https://drive.proton.me/urls/GTHB40AV9M#bUy6nRmkFvVw"
  }, {
    "label": "CAD Models",
    "href": "https://www.thingiverse.com/psavvas/collections/43677561/things"
  }]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "background",
    "text": "Background"
  }, {
    "depth": 2,
    "slug": "features",
    "text": "Features"
  }, {
    "depth": 2,
    "slug": "hardware",
    "text": "Hardware"
  }, {
    "depth": 3,
    "slug": "sensors",
    "text": "Sensors"
  }, {
    "depth": 3,
    "slug": "connectivity",
    "text": "Connectivity"
  }, {
    "depth": 3,
    "slug": "microcontroller",
    "text": "Microcontroller"
  }, {
    "depth": 3,
    "slug": "exterior-and-fsr-docking",
    "text": "Exterior and FSR Docking"
  }, {
    "depth": 3,
    "slug": "wiring",
    "text": "Wiring"
  }, {
    "depth": 2,
    "slug": "software",
    "text": "Software"
  }, {
    "depth": 3,
    "slug": "general-overview",
    "text": "General Overview"
  }, {
    "depth": 3,
    "slug": "text-notification-workflow",
    "text": "Text Notification Workflow"
  }, {
    "depth": 3,
    "slug": "on-device-code",
    "text": "On-Device Code"
  }, {
    "depth": 3,
    "slug": "off-device-code",
    "text": "Off-Device Code"
  }, {
    "depth": 2,
    "slug": "full-parts-list",
    "text": "Full Parts List"
  }, {
    "depth": 2,
    "slug": "contribute",
    "text": "Contribute"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Infant Guard is a fully integrated, Arduino-driven safety platform engineered to detect forgotten infants in vehicles and escalate alerts before temperatures reach life-threatening levels. This solution is purpose-built to address Pediatric Vehicular Heatstroke (PVH) by combining proven hardware, streamlined logic flows, and a resilient communication stack."
    }), "\n", createVNode("iframe", {
      src: "https://www.youtube.com/embed/mR1hxS20mqs",
      title: "InfantGuard Video Presentation",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true,
      className: "w-full aspect-video rounded-lg border border-neutral-200 dark:border-neutral-800"
    }), "\n", createVNode(_components.h2, {
      id: "background",
      children: "Background"
    }), "\n", createVNode(_components.p, {
      children: "Forgotten Baby Syndrome (FSD) is a primary driver of Pediatric Vehicular Heatstroke (PVH) deaths and injuries. Every year infants across the US die due to overheating in a vehicle after being left unsupervised. Since 1998 over 1000 infants have lost their lives due to PVH. That averages to about ~37 deaths per year. In most of these cases, guardians simply forgot their infants were still in the overheating vehicle. Since vehicles can heat up to 120F in as little as 30 minutes, being able to take action before it’s too late becomes crucial. Infant deaths can occur as early as 109F. InfantGuard attempts to resolve this issue by creating a reliable and long-lasting monitoring system that detects a forgotten baby and notifies the parent. If temperatures reach deadly levels InfantGuard can automatically notify emergency services with the vehicle’s details, temperature and location."
    }), "\n", createVNode(_components.h2, {
      id: "features",
      children: "Features"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: createVNode(_components.strong, {
            children: "Use of Bluetooth Fob:"
          })
        }), " InfantGuard uses a Bluetooth device, in this case a BLE iBeacon attached to the car keys, to detect the parent’s presence in the vehicle. This allows for Arduino to better know the current scenario and take more appropriate actions."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: createVNode(_components.strong, {
            children: "Text Notifications about forgotten infant:"
          })
        }), " InfantGuard uses text notifications to alert the user if their infant is left unsupervised in the vehicle. If temperatures begin nearing dangerous levels, InfantGuard will text the parent in a dedicated alert, making sure to give the vehicle’s current temperature. If temperatures reach deadly levels the user will be sent an emergency text, notifying them of the situation and that emergency services have been contacted. In all these texts the vehicle’s location is always attached."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: createVNode(_components.strong, {
            children: "Emergency Services Alert:"
          })
        }), " If vehicle temperatures reach deadly levels, InfantGuard will automatically text emergency services, including the vehicle make and model, temperature and location. This is to allow for a quick response that could help save the infant’s life."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: createVNode(_components.strong, {
            children: "Manual Reset:"
          })
        }), " If for some reason InfantGuard needs to be manually reset, a button present in the vehicle is available. Once pressed the system will stop monitoring for 15 minutes, before beginning scanning again."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: createVNode(_components.strong, {
            children: "Status Notifications:"
          })
        }), " InfantGuard provides the parent with constant status notifications. When the system is manually deactivated, the parent will receive a confirmation text, before receiving another one when the system reactivates. Furthermore the parent can also be notified with other texts, like when the system first boots up and is connected."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: createVNode(_components.strong, {
            children: "Long Lasting Battery Life:"
          })
        }), " InfantGuard is designed to have a long lasting battery, so that it can continue monitoring even if the vehicle is turned off. The current 10000mAh Belkin Battery Pack allows for roughly 80 hours of straight use. However the battery pack can recharge in roughly 4 hrs., so InfantGuard has been designed to recharge when the vehicle is turned on, and use battery when the vehicle is turned off."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "hardware",
      children: "Hardware"
    }), "\n", createVNode(_components.p, {
      children: "InfantGuard’s hardware and software provides reliable and long-lasting vehicle monitoring, ready to take action if necessary."
    }), "\n", createVNode(_components.h3, {
      id: "sensors",
      children: "Sensors"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "2 Force Sensing Resistors are attached to key locations where the child’s back will be located. This ensures accurate detection of the infant at all times."
      }), "\n", createVNode(_components.li, {
        children: "A DHT-22 Temperature sensor allows for accurate temperature detection which can trigger InfantGuard to take necessary actions to protect the infant."
      }), "\n", createVNode(_components.li, {
        children: "An HM-10 Bluetooth Receiver scans for the desired device/devices that are used to consider the parent present. The HM-10 uses RSSI signal strength to determine whether the parent is present with infant or too far away, which could require attention."
      }), "\n", createVNode(_components.li, {
        children: "An Arduino Push Button also allows for the system to be manually deactivated for 15 minutes at a time. During this period the Arduino will stop scanning and monitoring the vehicle."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "connectivity",
      children: "Connectivity"
    }), "\n", createVNode(_components.p, {
      children: "InfantGuard is powered by a Botletics SIM7000A shield. This allows for the Arduino to communicate with the internet, allowing for texts to be remotely sent via Twilio’s API. The SIM7000A is powered by Holograms IoT SIM Card, allowing for cheap and reliable connection no matter the vehicle’s location. Furthermore the SIM7000A also acts as the GPS of the system, allowing InfantGuard to easily be able to record the vehicle’s location."
    }), "\n", createVNode(_components.h3, {
      id: "microcontroller",
      children: "Microcontroller"
    }), "\n", createVNode(_components.p, {
      children: "InfantGuard is powered by an Arduino Mega 2560, to allow for multiple active Hardware Serial ports. This allows for both the HM-10, SIM7000A to actively communicate and scan. Furthermore if the Arduino is plugged into a computer for debugging, the Serial Monitor can also be used simultaneously."
    }), "\n", createVNode(_components.h3, {
      id: "exterior-and-fsr-docking",
      children: "Exterior and FSR Docking"
    }), "\n", createVNode(_components.p, {
      children: "InfantGuard is conveniently placed into a 3D printed case, that allows for all wires, microcontrollers and sensors to conveniently be hidden. Furthermore the box allows for a mounting location for the push button, temperature sensor and HM-10, so that they can get more accurate readings."
    }), "\n", createVNode(_components.p, {
      children: "To allow for the car seat to easily be removed two docking components, 1 for each FSR sensor were created. A universal male and female component were created. This allows for two wire connectors to be slid in and for them to automatically connect, thanks to a funnel system when the car seat is reattached to its base. The universal male and female components can be modified with specific mounting brackets to fit the car’s requirements. In this prototype, a more specific variant was created so that the two components could be mounted at the rear of the seat."
    }), "\n", createVNode(_components.p, {
      children: ["Both of these files can be found as STL files on Thingiverse at the following link: ", createVNode(_components.a, {
        href: "https://www.thingiverse.com/psavvas/collections/43677561/things",
        children: "https://www.thingiverse.com/psavvas/collections/43677561/things"
      })]
    }), "\n", createVNode("div", {
      style: {
        display: 'flex',
        gap: '12px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      },
      children: [createVNode("img", {
        src: "https://github.com/user-attachments/assets/edfd0030-a746-4da9-93bb-535f2fd2935c",
        alt: "InfantGuard Mountable FSR Docking Components 1",
        style: {
          width: '320px',
          maxWidth: '100%'
        }
      }), createVNode("img", {
        src: "https://github.com/user-attachments/assets/33637767-4be1-48d4-a11b-8721f7af63bf",
        alt: "InfantGuard Mountable FSR Docking Components 2",
        style: {
          width: '320px',
          maxWidth: '100%'
        }
      })]
    }), "\n", createVNode("p", {
      align: "center",
      children: createVNode("strong", {
        children: "Mountable InfantGuard FSR Docking Components"
      })
    }), "\n", createVNode("div", {
      style: {
        display: 'flex',
        gap: '12px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      },
      children: [createVNode("img", {
        src: "https://github.com/user-attachments/assets/3b0f6c85-e666-4a14-8905-3b7371bfaaf1",
        alt: "InfantGuard Generic FSR Docking Components 1",
        style: {
          width: '320px',
          maxWidth: '100%'
        }
      }), createVNode("img", {
        src: "https://github.com/user-attachments/assets/80aefcca-c5c2-435d-acca-245b43f3f05a",
        alt: "InfantGuard Generic FSR Docking Components 2",
        style: {
          width: '320px',
          maxWidth: '100%'
        }
      })]
    }), "\n", createVNode("p", {
      align: "center",
      children: createVNode("strong", {
        children: "Generic InfantGuard FSR Docking Components"
      })
    }), "\n", createVNode(_components.h3, {
      id: "wiring",
      children: "Wiring"
    }), "\n", createVNode(_components.p, {
      children: "InfantGuard’s wiring uses generic Dupont Wires that can be either used on a breadboard and the Arduino or soldered onto a circuit if preferred."
    }), "\n", createVNode("img", {
      width: "1280",
      height: "720",
      alt: "InfantGuard Circuit Schematic",
      src: "https://github.com/user-attachments/assets/470edf90-954b-477a-a258-aee44d707836"
    }), "\n", createVNode("p", {
      align: "center",
      children: createVNode("strong", {
        children: "InfantGuard Circuit Schematic"
      })
    }), "\n", createVNode(_components.h2, {
      id: "software",
      children: "Software"
    }), "\n", createVNode(_components.p, {
      children: ["InfantGuard is an open source project on GitHub. All coding files are publicly available on GitHub; to learn more about contributing, visit the ", createVNode(_components.em, {
        children: "Contribute"
      }), " section of this page. This project is made up of two major sections: the on-device code and the cloud code. These were coded in Arduino Sketch and JavaScript respectively."]
    }), "\n", createVNode(_components.h3, {
      id: "general-overview",
      children: "General Overview"
    }), "\n", createVNode(_components.p, {
      children: "The following flow chart exhibits the general flow of InfantGuard across both on-device programs and cloud programs:"
    }), "\n", createVNode("img", {
      width: "1280",
      height: "720",
      alt: "InfantGuard General Code Flow",
      src: "https://github.com/user-attachments/assets/9f1b2c82-039d-49e1-8833-9332df4062f9"
    }), "\n", createVNode("p", {
      align: "center",
      children: createVNode("strong", {
        children: "InfantGuard General Code Flow"
      })
    }), "\n", createVNode(_components.h3, {
      id: "text-notification-workflow",
      children: "Text Notification Workflow"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "SIM7000A establishes connection with local cellular towers via a Hologram SIM."
      }), "\n", createVNode(_components.li, {
        children: "The SIM7000A then establishes a connection with a specific webhook.site URL that includes all the required information including vehicle location and temperature"
      }), "\n", createVNode(_components.li, {
        children: "webhook.site then redirects the data received to a secure Cloudflare Worker."
      }), "\n", createVNode(_components.li, {
        children: "The Cloudflare Worker parses the data received and determines which message to send."
      }), "\n", createVNode(_components.li, {
        children: "Cloudflare fills the chosen message template with received variables before sending it to Twilio’s API"
      }), "\n", createVNode(_components.li, {
        children: "Twilio then takes charge of the SMS delivery to the user’s phone."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "on-device-code",
      children: "On-Device Code"
    }), "\n", createVNode(_components.p, {
      children: ["On-device code of InfantGuard, being coded mostly in Arduino Sketch has the majority of its code repeating itself in ", createVNode(_components.code, {
        children: "void loop()"
      }), ". The ", createVNode(_components.code, {
        children: "void setup()"
      }), " function is responsible for booting up the system, activating the sensors, establishing cellular and GPS connection as well as enabling the Bluetooth scanning. Inside ", createVNode(_components.code, {
        children: "void loop()"
      }), ", the program will always begin by checking the FSR sensor for an infant. If an infant is present then by precaution InfantGuard will record GPS location. InfantGuard will then scan for nearby Bluetooth devices using the MAC Address of the parent device and the RSSI signal strength value. InfantGuard uses this information to check whether the parent is present or not and also checks the temperature. Depending on these results, InfantGuard will determine whether it needs to send a text, and whether the text cooldown period has elapsed. If so it uses its cellular capabilities to communicate with the webhook.site"]
    }), "\n", createVNode(_components.h3, {
      id: "off-device-code",
      children: "Off-Device Code"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: createVNode(_components.strong, {
          children: "Webhook.site:"
        })
      }), "\nSince the SIM7000A can only establish an HTTP connection, websites that don’t require a secure connection were needed. A custom webhook.site was then created which allowed for the Arduino to communicate with the webhook, have the webhook parse the data, and create a custom action that redirects the information to a secure Cloudflare Worker. The webhook uses an HTTP redirect action that forwards to the Cloudflare Worker. The action uses a ‘GET’ method with the following programmable URL:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "https://workerURLgoeshere.workers.dev/?cord1=$request.query.cord1$&cord2=$request.query.cord2$&temp=$request.query.temp$&type=$request.query.type$"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: createVNode(_components.strong, {
          children: "Cloudflare Worker:"
        })
      }), "\nOnce webhook.site relays the information to the Cloudflare Worker, it parses the URL data and determines which text message template to send. It then fills out the variables in the message template like temperature or vehicle location and securely communicates with the Twilio API. Twilio is the text message provider that was chosen to securely provide text notifications to the user’s phone. The full Cloudflare worker code can be found in the file: ", createVNode(_components.code, {
        children: "Cloudflare.js"
      }), " This workflow also helps protect the API keys which can be stored as secret variables inside the Cloudflare Worker dashboard."]
    }), "\n", createVNode(_components.h2, {
      id: "full-parts-list",
      children: "Full Parts List"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Arduino Mega 2560"
      }), "\n", createVNode(_components.li, {
        children: "FSR Force Resistance Sensor"
      }), "\n", createVNode(_components.li, {
        children: "Temperature Sensor"
      }), "\n", createVNode(_components.li, {
        children: "HM-10 Bluetooth Module"
      }), "\n", createVNode(_components.li, {
        children: "iBeacon Transmitter"
      }), "\n", createVNode(_components.li, {
        children: "Breadboard"
      }), "\n", createVNode(_components.li, {
        children: "Dupont Wires"
      }), "\n", createVNode(_components.li, {
        children: "3.7V LiPo Battery"
      }), "\n", createVNode(_components.li, {
        children: "10000 mAh Belkin Battery Pack"
      }), "\n", createVNode(_components.li, {
        children: "PLA Filament"
      }), "\n", createVNode(_components.li, {
        children: "10K Ω & 2K Ω Resistor"
      }), "\n", createVNode(_components.li, {
        children: "Type C to USB D Adapter"
      }), "\n", createVNode(_components.li, {
        children: "Push Button"
      }), "\n", createVNode(_components.li, {
        children: "Circuit Board"
      }), "\n", createVNode(_components.li, {
        children: "Circuit Board Mounts"
      }), "\n", createVNode(_components.li, {
        children: "Male & Female 12v DC Power Jack Adapter Connector"
      }), "\n", createVNode(_components.li, {
        children: "Screws & Nuts"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "contribute",
      children: "Contribute"
    }), "\n", createVNode(_components.p, {
      children: "If you’re interested in contributing feel free to fork the repository and submit a Pull Request. InfantGuard is designed to be an open-source, life-saving project."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "InfantGuard was created as a 2026 Engineering Fair Project for the Great Mills High School STEM Academy and the St. Mary’s County Science & Engineering Fair. It was created by Paul Savvas."
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/work/infantguard.mdx";
const file = "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/content/work/infantguard.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/Personal-Portfolio-Website/Personal-Portfolio-Website/src/content/work/infantguard.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
