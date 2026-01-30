---
title: An Experimental Security Analysis of an Industrial Robot Controller
description: 'A summary of the paper'
slug: industrial-robot-paper-summary
category: 'paper-summary'
date: '2025-05-05'
---

Paper Summary: [An Experimental Security Analysis of an Industrial Robot Controller.](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7958582) Quarta, Pogliani, Polino, Maggi, Zanchettin, and Zanero. IEEE S&P 2017.

The authors aim to systematically analyse the security of industrial robot controllers, owing to a lack of an analysis in the field. They investigate if it is possible to hamper a defined minimal set of security expectations from the robots such as sensing precision, correctness, and safety of human operators. An industrial robot controller manufactured by ABB, a leading vendor in the robotics industry is used for performing these checks and attacks. The authors conduct a hands-on, black-box security assessment of the IRC5 robot controller, focusing on its default configuration as found in real-world deployments. Their goal is to empirically evaluate how exposed such systems are to cyberattacks, especially in light of growing integration between IT and OT environments.

The approach involves treating the robot controller like a target in a traditional penetration test. They interact with it via its exposed interfaces such as web services, FTP server, and specific robot control protocols. They demonstrate some high-impact findings: 
Attackers can access and modify robot programs via FTP
They can use undocumented APIs to bypass authentication and persistently manipulate motion commands. 
The robot’s internal logs and memory mappings can be accessed without privilege escalation, leaking information that could aid follow-up attacks. 
The authors also highlight that the safety measures in place are largely physical and passive by themselves. They are not designed to detect or block malicious logic embedded in legitimate-looking robot instructions.

The key insight from the paper is that these robot controllers operate in an environment where trust is assumed. As such, security improvements have not kept pace with the connectivity features added over time. The system is exposed to the network for interconnection but lacks basic protections like authentication, encryption, or integrity checks on commands. The analysis shows that attackers with network access can directly impact physical operations, impacting the physical security of these devices which can cause severe harm.

While the study demonstrates critical limitations in controller security, it has some limitations. The scope is narrow as discussed by the authors, owing to budget limitations. As such, the authors have only surmised that these findings can be similar across vendors with some certainty. Future work could include comparative analysis across multiple vendors, test how firmware updates affect security posture, and develop or test defensive mechanisms like intrusion detection systems. Specific mitigations beyond general best practices can also be provided. Despite these limitations, the paper exposes how legacy assumptions about trust and isolation no longer hold in modern industrial robotic systems, and the general discussion of best practices is itself a great addition to the discussion of such ecosystems.

