---
title: "Privacy"
slug: "privacy"
updated: "August 2026"
description: "Privacy at TidTil – transparent information about the app and website."
---

This privacy policy describes the processing of personal data when using the **TidTil app** and this **TidTil website**. It reflects the current technical implementation of the app and website.

## Data controller

The controller responsible for TidTil and this website is:

{{< legal >}}

No data protection officer is currently designated because, based on the present size of the business, we do not assume that a statutory appointment requirement applies. We will update this policy if that changes.

## In short

- TidTil requires **no separate TidTil account** and no additional TidTil password.
- Calendar and profile data are processed locally on the device and through **Apple iCloud/CloudKit**.
- Family sharing uses **CloudKit Sharing**. Shared content is accessible to the people you invite.
- TidTil operates **no proprietary backend server for calendar content**.
- Based on the current code, the app contains **no advertising, tracking or third-party analytics SDKs**.
- Event reminders and notifications about new family events are generated as **local iOS notifications**.
- Purchases and subscriptions are handled through **Apple StoreKit/App Store**.

# 1. Privacy in the TidTil app

## 1.1 What data does TidTil process?

Depending on the features you use, the app processes the following categories of data in particular.

### Events and calendar data

An event may contain, among other things:

- event title,
- start and end date and time,
- multi-day status,
- repeat rule,
- selected reminder,
- event type, such as regular event, birthday or anniversary,
- a person's name for birthdays or anniversaries,
- assignments to family members or locally created people,
- technical identifiers of assigned CloudKit participants,
- a technical identifier of the family member who created the event.

### Family members and locally created people

TidTil distinguishes between people participating through their own app/iCloud account and locally created people, such as children without their own iPhone. Data may include:

- name,
- internal technical identifier,
- optional image data,
- relationship to a family and to events.

When family sharing is active, names and event assignments of people belonging to the family may be synchronised with invited family members.

### User profile

Your own profile may contain:

- name,
- telephone number,
- email address,
- custom text for the home card,
- optional profile photo.

These profile details are generally associated with the user's private CloudKit area. When you use a shared family calendar, your **profile name is additionally published within the shared family area** so that other family members can identify you in the participant list. This name publication does not automatically share your telephone number, email address, profile photo or home-card text with family members.

### CloudKit participant data

For invitations and management of a shared calendar, Apple provides technical participant information through CloudKit. Depending on invitation and acceptance status, this may include:

- CloudKit user/record identifier,
- display name or name components,
- invitation status,
- role as owner or participant,
- for pending invitations, an email address or telephone number made available by Apple where applicable.

TidTil uses this information only to support invitations, participant lists and event assignments inside the shared calendar. Such information may also form part of an internal stable participant identifier until Apple provides a permanent CloudKit record identifier.

## 1.2 Local storage and iCloud/CloudKit

TidTil uses **Core Data** for local storage and **Apple CloudKit** for synchronisation. The app uses a private CloudKit scope for a user's own data and a shared CloudKit scope for data shared with that user by others.

The local database is protected using the iOS file-protection class `CompleteUntilFirstUserAuthentication`. After a device restart, the data therefore becomes available only after the first unlock; afterwards iOS can access it as necessary for background synchronisation.

Apple's privacy and security terms also apply to CloudKit. TidTil does not operate a proprietary application server to which private calendar content is sent for analytics or advertising.

## 1.3 Family sharing and synchronisation

Family sharing is based on **Apple CloudKit Sharing**. When you share a family calendar, invited and authorised participants can view and – under the sharing permissions used by TidTil – edit the shared calendar data.

Sharing is managed through Apple's system interface. Only people included in the share receive access to the shared calendar. Owners can remove participants through Apple's sharing controls, and participants can leave a share.

With an active share, shared events, locally created family people and the profile-name directory used to identify participants may be synchronised between participating devices.

## 1.4 Profile photos and photo selection

TidTil uses Apple's **system photo picker (PhotosPicker)** to select a profile photo. The app receives access only to the image you select and does not automatically gain access to your entire photo library.

The selected image is resized for use as a profile image and stored with the profile data. It is not uploaded to a proprietary TidTil server.

## 1.5 Notifications and reminders

TidTil uses Apple's notification system for:

- reminders you choose for events,
- notifications about newly synchronised family events that concern you.

These notifications are generated on the device using `UNUserNotificationCenter`. Notification content may include the event title, date, time and, where available, the name of the family member who created the event.

CloudKit may wake the app through system/background notifications when changes occur. TidTil does not operate its own push-notification server for this purpose.

Notification permission is controlled through the iOS system dialog. Notifications about new family events can also be disabled in TidTil's settings.

## 1.6 Device settings and UserDefaults

Some non-content settings are stored locally through Apple's `UserDefaults` / SwiftUI `AppStorage`, in particular:

- selected accent colour,
- preference for notifications about new family events,
- a technical progress token that prevents already processed CloudKit changes from generating duplicate notifications.

These settings are used only for app functionality and not for advertising or profiling.

## 1.7 TidTil Sync, StoreKit and subscriptions

The planned TidTil Sync subscription uses **Apple StoreKit 2**. Product information, purchases, renewals, restoration and subscription management are handled by Apple and the App Store.

TidTil checks inside the app whether a valid entitlement exists for the relevant product identifiers. Payment information such as credit-card or bank details is not processed by TidTil and is not stored on TidTil-operated servers.

Apple's terms and privacy information additionally apply to purchases and subscriptions.

## 1.8 No advertising, tracking or third-party analytics

Based on the currently reviewed app code:

- TidTil contains no advertising SDKs,
- TidTil contains no third-party analytics SDKs,
- TidTil does not use an advertising identifier for tracking,
- TidTil does not create user profiles for advertising or marketing purposes,
- TidTil does not send calendar content to a proprietary analytics or tracking service.

Apple may process its own technical data in connection with operating-system, iCloud, CloudKit and App Store services. Apple's privacy policy applies to that processing.

## 1.9 Retention and deletion in the app

The current app version handles data in particular as follows:

- Your own one-off events are generally retained until deletion; one-off events whose end is more than **30 days** in the past are automatically removed from your own private store.
- Recurring events, birthdays and anniversaries are not removed by this automatic 30-day cleanup.
- Events in a calendar shared by another person are not automatically deleted by your device for all participants.
- Individual events can be deleted directly in the app.
- “Delete all my events” removes your own events from the private area.
- “Reset app completely” removes or clears your own events, your own person entries and profile data. It does not indiscriminately delete other participants' data from the shared calendar.
- An existing CloudKit share may additionally need to be ended or left through the family/sharing controls.
- Simply deleting the app from the iPhone does **not necessarily** delete data already stored in iCloud/CloudKit.

## 1.10 Children and other people without their own device

Parents or other authorised users can create people within a family – particularly children without their own device – and assign events to them. Depending on use, this may process a name, internal identifier, optional image data and event assignments.

If the calendar is shared with other family members, these details may be visible to and editable by invited participants. Please enter personal data about other people only where you are authorised to do so.

TidTil does not use this information for advertising, tracking or profiling.

# 2. Privacy on the TidTil website

## 2.1 Hosting through GitHub Pages

This website is hosted using **GitHub Pages**. When a GitHub Pages site is accessed, GitHub may log a visitor's IP address and retain it for security purposes. Other technically necessary connection and request information may also be processed.

This processing serves the secure, stable and reliable provision of the website and is based on our legitimate interests under Art. 6(1)(f) GDPR.

Further information is available in GitHub's privacy information.

## 2.2 Google Fonts

The website currently loads the **Jost** and **Sacramento** fonts through Google Fonts. Your browser therefore establishes a connection to Google servers when a page is loaded. This may transmit information including your IP address, browser/device information, time of access and the requested or referring URL to Google.

The fonts are currently integrated to provide a consistent visual presentation of the website. This processing is based on our legitimate interest in consistent and technically straightforward presentation under Art. 6(1)(f) GDPR. Further information is available in Google's privacy policy.

## 2.3 No proprietary web analytics or advertising trackers

At present, we do not use proprietary web analytics, Google Analytics, advertising cookies or advertising trackers on the website.

Technically necessary processing by the hosting provider and the currently embedded Google Fonts remains unaffected.

## 2.4 Contact by email

If you contact us by email, we process the information you provide, in particular your email address, message content and, where supplied, your name, in order to respond to your enquiry.

Where the enquiry relates to a contract or pre-contractual steps, processing is based on Art. 6(1)(b) GDPR. In other cases it is based on our legitimate interest in responding to enquiries under Art. 6(1)(f) GDPR.

# 3. Recipients and international processing

Depending on the function used, technically necessary data may in particular be processed by:

- **Apple** for iCloud, CloudKit, CloudKit Sharing, push/system notifications and StoreKit/App Store,
- **family members you invite** for jointly shared calendar data,
- **GitHub** for hosting this website,
- **Google** for the web fonts currently loaded externally.

International providers may process data outside the European Union or European Economic Area. Such transfers are subject to the safeguards used by the relevant provider and its applicable privacy terms.

# 4. Legal bases

Where the GDPR applies, we rely in particular on:

- **Art. 6(1)(b) GDPR** where processing is necessary to provide app functionality, synchronisation, purchase/subscription functions or to handle contract-related enquiries,
- **Art. 6(1)(f) GDPR** where processing is necessary for secure and reliable website operation, technical presentation or handling general enquiries.

Where processing is triggered solely by an optional feature – such as selecting a profile photo, enabling a reminder or inviting family members – processing occurs only when you actively use that feature. If consent becomes legally required for a particular operation in the future, TidTil will request it separately.

# 5. Your rights

Where the legal requirements are met, you have rights including:

- access to your personal data,
- rectification of inaccurate data,
- erasure,
- restriction of processing,
- data portability,
- objection to processing based on legitimate interests,
- withdrawal of consent with effect for the future,
- the right to lodge a complaint with a competent data protection supervisory authority.

A substantial part of private app data resides exclusively within your Apple/iCloud environment. Because TidTil does not operate a proprietary backend server for this calendar content, we cannot centrally retrieve that content for you in the way a conventional cloud provider could. Many data items can be managed directly through the app and Apple's iCloud functions.

# 6. Changes to this privacy policy

We update this privacy policy when features, technical processes, services used or legal requirements change. The current version is always available on this page. The update date appears at the beginning of the policy.

## Contact

For privacy questions, contact us at: {{< email >}}
