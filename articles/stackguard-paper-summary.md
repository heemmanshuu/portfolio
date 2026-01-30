---
title: StackGuard - Automatic Adaptive Detection and Prevention of Buffer-Overflow Attacks
description: 'A summary of the paper'
slug: stackguard-paper-summary
category: 'paper-summary'
date: '2025-04-09'
---

Paper Summary: StackGuard: Automatic Adaptive Detection and Prevention of Buffer-Overflow Attacks. Cowan, Pu, Maier, Hinton, Walpole, Bakke, Beattie, Grier, Wagle, and Zhang. Usenix Security 1998.

The authors present a compiler extension in the form of StackGuard to protect against buffer-overflow attacks. Buffer overflow attacks are when code is injected into a stack by overflowing an size-unchecked buffer, and this injected code is executed by overwriting the return address of the callee. The authors discuss such attacks, the Canary and MemGuard approaches to StackGuard, its effectiveness, memory overheads and related approaches to protection against similar attacks. 

The motivation behind their approach is that most buffer overflow fixes are concentrated on the source of the issue (the vulnerability of the program itself), rather than at the destination (which is the stack). Concentrating on fixing issues at the destination allows us to protect older legacy programs which are still running, and also provide protection against future anticipated attacks. There are two provided approaches in StackGuard: Canary based detection and MemGuard based prevention to stack corruption. In the former, a canary word is placed before the return address in the stack. Hence, if a buffer overflow occurs and the return address is changed, the canary will also have been changed. This change signals corruption and hence an attack. It is a lightweight defense, adding little overhead and being backward compatible. 

The other MemGuard approach completely prevents modification to the return address. Return addresses on the stack are treated as quasi-invariant, being read-only when the function is active and modifiable otherwise. The VM pages containing the return addresses are marked as read-only, and any write actions are performed on non-protected words on protected pages. This is a very costly operation, almost 1800 times more expensive than an ordinary write. 

StackGuard is shown to be mostly effective, failing at the Perl attack but also effective against attacks formulated after its creation. It also has several limitations. The canary based approach, even if the canary words are randomly distributed, is susceptible to prediction attacks. It also leaves other fields such as function pointers open, which are exploited by attacks like Perl. MemGuard is also extremely time consuming, but an adaptive approach as stated by the authors can help, which in turn is susceptible to partial DoS type of attacks. To strengthen the approach, the authors themselves suggest extensions: protecting broader sets of critical data structures, including heap-allocated function pointers and global variables. StackGuard shifts the focus to the stack for protection from buffer overflow attacks, reducing the urgency to fix overflow vulnerabilities and raising the baseline security for vulnerable systems.

