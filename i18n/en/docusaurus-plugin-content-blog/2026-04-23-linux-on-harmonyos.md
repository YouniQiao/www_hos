---
title: Using Linux on a HarmonyOS PC
description: Huawei's Fusion Development Engine officially launched in the HarmonyOS PC AppGallery on April 19, letting you run an openEuler Linux environment on a HarmonyOS PC with a single click — no virtual machine or dual-boot setup required.
slug: linux-on-harmonyos
authors: youniqiao
tags: [Development]
hide_table_of_contents: false
---

If you're a developer and also a HarmonyOS PC user, you may have wondered: can a HarmonyOS PC run Linux? The answer is yes. Huawei's in-house Fusion Development Engine is now officially available in the HarmonyOS PC AppGallery, letting you spin up a complete Linux development environment with a single click — no wrestling with virtual machines, and no dual-boot setup.

This article walks you through the Fusion Development Engine's features, how to use it, and the limitations you should keep in mind.

<!-- truncate -->

## What Is the Fusion Development Engine?

The Fusion Development Engine is a **lightweight virtualized development environment** built by Huawei. It first appeared in the early access section of the HarmonyOS PC AppGallery on April 1, 2026, and officially launched on April 19. It makes Linux development feel as smooth as using a native app — no tedious configuration, just one click to run a Linux environment directly on your HarmonyOS PC, including most command-line tools and applications.

Put simply, it gives a HarmonyOS PC the best of both worlds: the polished experience of the native HarmonyOS ecosystem, plus the powerful development capabilities of a Linux environment.

## Core Features

![Fusion Development Engine interface](/img/blog-linux-harmonyos.jpg)

### 1. One-Click Linux Environment

The biggest highlight of the Fusion Development Engine is that it works **right out of the box**. Once you install it from the HarmonyOS PC AppGallery, a single click launches a complete Linux environment with no extra configuration. It drops you straight into a command-line interface, and the vast majority of common Linux command-line tools and development programs run normally.

> **Note**: The Linux distribution bundled with the current version of the Fusion Development Engine is **openEuler**. Installing other Linux distributions is not supported for now. Huawei says future versions will support more distributions; please refer to the actual product for details.

### 2. Shared Folders

You can set up shared folders to exchange data between the HarmonyOS PC and the Linux environment. Download a code repository on the HarmonyOS side, compile and develop it in the Linux environment, then move the final build back to the HarmonyOS side for distribution — the whole workflow fits together seamlessly.

In the Linux environment, the shared directory is accessible at the path `/mnt/linux_share`.

### 3. Snapshot Backup

You can save an image snapshot of the current point in time and restore it whenever you like, so regular backups protect you against data loss. Up to **5 snapshots** can be stored. If you make a mistake or the environment gets corrupted, you can quickly roll back to an earlier snapshot without worrying about losing your code or development environment.

### 4. Disk Expansion

You can raise the maximum capacity of the virtual disk, so storage bottlenecks are no longer a concern. As projects grow larger and environments multiply, you can expand storage space at any time.

### 5. System Reset

A one-click system reset restores the environment to its original, pristine state — handy when things get messy or you want to start over.

## Supported Devices and System Requirements

The Fusion Development Engine currently **supports HarmonyOS PCs only** (laptop devices). It is not available for phones or tablets.

| Item | Requirement |
|------|------|
| System version | HarmonyOS 6.0 or later |
| Device type | HarmonyOS PC (MateBook Fold ULTIMATE DESIGN / MateBook Pro / MateBook 14 HarmonyOS Edition, etc.) |
| Storage | At least 10 GB of free space recommended |
| Installation | Search for "Fusion Development Engine" in the HarmonyOS PC AppGallery |

> **Commercial HarmonyOS PC users**: The system must be upgraded to HarmonyOS 6.0.0.130 or later before the engine can be installed and used in the personal space.

## How to Use the Fusion Development Engine

### Step 1: Install

1. Open the **AppGallery** on your HarmonyOS PC
2. Search for "**Fusion Development Engine**"
3. Click Install and wait for the download to finish

### Step 2: Launch and Configure

1. Once installed, open the Fusion Development Engine from the home screen or the app list
2. On first launch, the Linux (openEuler) environment is initialized automatically
3. Follow the prompts to complete the basic setup (username, password, and so on)

## Real-World Use Cases

### Scenario 1: Full-Stack Development

On a business trip, you only need to carry one HarmonyOS PC: use it for everyday work with native HarmonyOS apps, and open the Fusion Development Engine whenever you need to write, compile, and debug code.

### Scenario 2: Learning Linux and Programming

For programming students, the Fusion Development Engine provides a zero-configuration learning environment. There's no need to install a virtual machine or set up dual boot — just open it and start writing and running code.

### Scenario 3: Server Operations and Maintenance

Connect to remote servers over SSH for day-to-day operations. Combined with HarmonyOS multi-window support, you can watch monitoring dashboards and run operations commands at the same time.

### Scenario 4: Embedded and Cross-Platform Development

HarmonyOS is itself an all-scenario operating system, and the Fusion Development Engine lets developers handle cross-compilation and similar tasks on a single device, saving the hassle of switching between machines.

## Limitations of the Current Version

As a relatively new product, the Fusion Development Engine still has some functional limitations in its current version. Keep the following in mind when you use it:

1. **openEuler only**: The current version supports only the openEuler Linux distribution. Ubuntu, Debian, and other distributions cannot be installed; support is planned for future versions.

2. **No systemctl support**: `systemctl` and other systemd service management tools are unavailable, so services must be started manually. For example, to start the SSH service, use `sudo /usr/sbin/sshd`.

3. **No mounting ISO images with mount**: You cannot use the `mount` command to mount image files directly in the Fusion Development Engine. As a workaround, extract the ISO file on the HarmonyOS side and access it through a shared folder.

4. **No kernel operations**: Kernel commands such as `modinfo`, `modprobe`, `rmmod`, and `insmod` are unavailable, so the kernel cannot be modified.

5. **No IPv6 support**: The Fusion Development Engine does not currently support IPv6.

6. **Dynamic IP assignment**: The Fusion Development Engine uses a dynamic IP address, which may change each time it starts. If you need to connect through CodeArts IDE or similar tools, first run `ip addr` to check the current IP address.

7. **File permissions in shared folders**: Files created in a shared folder are owned by root, so commands such as `git clone` must be run with `sudo`.

8. **Chinese text display**: Chinese characters in the command-line interface may not render fully. Try pinch-zooming the interface to fix it.

## Conclusion

The Fusion Development Engine is a significant move by Huawei to improve the developer experience on HarmonyOS PCs. It addresses a genuine need — running a Linux environment on a HarmonyOS PC — with no virtual machine, no dual boot, and just one click. Although the current version supports only openEuler and comes with a few functional limitations, as a 1.0 release it already covers the core development scenarios.

As the HarmonyOS ecosystem continues to grow, the Fusion Development Engine will keep improving. Once it supports more Linux distributions and fills in features like systemctl, the experience will be even more complete. If you're a HarmonyOS PC user and a developer, we strongly recommend installing it to see for yourself.

---

*Sources: [Huawei official help documentation](https://consumer.huawei.com/cn/support/content/zh-cn16091898/), [ITHome report](https://www.ithome.com/0/934/994.htm)*