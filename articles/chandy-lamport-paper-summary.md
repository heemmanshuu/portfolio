---
title: The Chandy Lamport Algorithm
description: 'A summary of the paper'
slug: chandy-lamport-paper-summary
category: 'paper-summary'
date: '2025-02-16'
---

Paper Summary: K. M. Chandy and L. Lamport, “Distributed Snapshots: Determining Global States of Distributed Systems“, ACM Transactions on Computer Systems, 1985

This seminal paper presents an algorithm for global state detection in distributed systems. Many problems in distributed systems such as deadlock detection and termination detection can be reduced to a stable property detection problem, which seeks to determine whether a stable property holds true for a given global state of the system. A stable property is one which, if true, persists to be true thereafter. Evidently, determining the global state of the system aids in solving such problems. 

Cooperation between processes happens via special marker messages, sent to indicate that a snapshot of the system is needed to be computed. It is assumed that any process in the system can be the initiator for the snapshot. The discussion of initiation is heavily system specific and so is left out. The algorithm operates as follows:
1. Marker sending phase: A process first records its own state, then sends one marker message along each of its outgoing channels before sending any other message on these channels.
2. Receiving phase: On receiving its first marker message from a channel c, the process records its state and records the state of c as the empty sequence. It starts keeping track of messages it is receiving from all its other incoming channels. When it eventually receives a marker message from one of these (c’), the process records the state of c’ as the sequence of messages received along c’ since tracking began.
3. The algorithm terminates when all processes receive markers from all their incoming channels, since this guarantees that all process and channel states have been recorded. 

The order of process and channel state recording guarantees that a consistent global state will be recorded (eg., no extra messages in the system). The recorded state might not be a state that the system actually attained at some point. However, the authors prove that the recorded state will be reachable from the state where the recording started, and the state where the recording ended will be reachable from the recorded state. This allows the stability detection algorithm to use the recorded state returned by the algorithm, as the stable property will hold true for all states reachable from the recorded state, which includes the final state where the recording ended.

The authors define and model the processes in a distributed system, their local states, and the communications between them properly in an effort to improve upon previous impractical algorithms of deadlock/termination detection. Processes are assumed to be able to store their local state, and the messages they send and receive across connecting channels. A combination of process and channel local states leads to what is called the global state of a distributed system. Processes are assumed to not share common clocks or memory, hence the algorithm is designed so that they cooperate with each other to determine global state. These assumptions are fair and when assisted with the intuitions and examples provided by the authors lead to a robust and intuitive algorithm for recording state. The algorithm is also non-invasive with its marker message approach - it does not disturb the current computations going on in the system.

There are, however, a few limiting assumptions that hinder the application of the Chandy-Lamport algorithm to real life distributed systems. Although the infinite buffer assumption for channels can be improved, it is also assumed that transmission in channels is error-free and takes place in FIFO (first-in-first-out) fashion. Algorithms such as Lai-Yang’s and Mattern’s offer improvements to include non-FIFO cases, whereas Spezialetti-Kerns offers a way to reduce overhead caused by multiple snapshot exchange between processes. For robustness in real life, algorithms or systems including error detection and message acknowledgments (ACKs) similar to networking systems might be required.

