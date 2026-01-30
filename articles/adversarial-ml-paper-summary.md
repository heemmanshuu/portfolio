---
title: Adversarial Examples Are Not Bugs, They Are Features
description: 'A summary of the paper'
slug: adversarial-ml-paper-summary
category: 'paper-summary'
date: '2025-05-07'
---

Paper Summary: [Adversarial Examples Are Not Bugs, They Are Features.](https://arxiv.org/pdf/1905.02175) Ilyas, Santurkar, Tsipras, Engstrom, Tran, and Madry. NeurIPS 2019.


The authors investigate the origin of adversarial examples in machine learning. Traditional perspectives view these examples as outliers because of model imperfections, high-dimensional input spaces, or even overfitting. The authors propose an entirely different viewpoint: adversarial examples result from the model’s reliance on non-robust but predictive features present in the data distribution. These features are statistically valid for the task but are fragile and often imperceptible to humans.

The key contribution of the paper is a framework for defining and distinguishing between robust and non-robust features. A feature is “useful” if it correlates with the label, and “robust” if this correlation holds even under small adversarial perturbations. Similarly, a “non-robust” feature loses its predictive power under such perturbations. The authors show that standard training naturally encourages models to leverage all predictive features (both robust and non-robust) because training optimizes accuracy but not robustness.

The authors construct two types of datasets derived from CIFAR-10 and ImageNet: one where non-robust features are suppressed and another where only non-robust features are used. They show that:
Models trained on “robustified” datasets generalize well and show increased adversarial robustness, even when trained with standard methods.
Models trained solely on non-robust datasets still achieve high accuracy on the unmodified test set, revealing the real influence of non-robust features in natural classification.

The authors explain transferability of adversarial examples as a consequence of different models learning similar non-robust features from the same data distribution. A theoretical model based on Gaussian distributions is introduced to formalize their insights. This model demonstrates how adversarial vulnerability arises from misalignment between the feature-induced data metric and the adversarial perturbation norm.

One of the main limitations of the paper lies in the abstraction gap between the theoretical framework and the empirical results. Although the definitions of robust and non-robust features are formalized, they still rely heavily on model-dependent behavior and assumptions about the alignment of features with label correlations. Additionally, the approach presumes that models use a clean linear separation of features, which may not generalize well to more complex tasks. Future work could focus on extending this framework to more varied data modalities (e.g., text or audio) and developing training regimes that explicitly balance accuracy and robustness through principled regularization.
