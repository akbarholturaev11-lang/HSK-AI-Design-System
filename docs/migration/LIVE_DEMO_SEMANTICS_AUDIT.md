# Live JSX demo semantics — exact source-to-port review (29 demonstrations)

**Scope:** visual/behavioral evidence from **12 button** and **17 banner** Storybook demo blocks in the original 44 MDX pages. The portable Markdown edition **does not reproduce or execute vendor JSX**, but its professional information hierarchy and semantics must not disappear. This is the source-property inspection ledger, not a claim that HSK AI supports the demo actions or source renderer.

**Source:** `HSK-AI-Design-System` `restore/hsk-ai-professional-unified-audit-20261115`; source Git blobs are pinned below. All data/copy in demo examples are illustrative unless verified against the real HSK AI product. Design principles override incidental sample styling; third-party source art/code must not be imported into the product without rights.

## Buttons — 12 demo blocks

**Exact MDX blob:** `b20a71a3783cba8a21797b4a431a696ea57d6c92`.
**Portable guide:** [buttons.md](../portable/guidelines/design-components/buttons.md).
These are **source demonstrations**, not mandated production buttons or notifications.

| # | Source section | Do / avoid / reference | Demonstrated semantic props | Source author's behavioral note |
| ---: | --- | --- | --- | --- |
| 1 | Primary button | reference | kind=primary | (interactive example; read prose above in its source section) |
| 2 | Primary button | dont | visual placement/copy reference | put a primary button on every card when the page already has a primary action. |
| 3 | Secondary button | reference | kind=secondary | (interactive example; read prose above in its source section) |
| 4 | Secondary button | dont | visual placement/copy reference | use secondary buttons for low-value actions like “View course” repeated down a list. |
| 5 | Tertiary button | reference | kind=tertiary | (interactive example; read prose above in its source section) |
| 6 | Tertiary button | dont | visual placement/copy reference | use a tertiary button for “Read more.” It takes the user somewhere, so it should be a link. |
| 7 | Neutral button | dont | kind=primary/secondary/tertiary; actionType=neutral/neutral/neutral | use neutral text buttons. Neutral is only for icon-only tertiary buttons. |
| 8 | Small buttons | reference | kind=tertiary; size=small | (interactive example; read prose above in its source section) |
| 9 | Small buttons | do | visual placement/copy reference | use a small button for a micro-action inside a compact card, like “Set reward.” |
| 10 | Disabled | reference | kind=primary; disabled=true | (interactive example; read prose above in its source section) |
| 11 | Disabled | dont | visual placement/copy reference | disable a button because the user hasn’t finished a step yet, like selecting questions to review. |
| 12 | Hierarchy and grouping | reference | kind=tertiary/secondary/primary | (interactive example; read prose above in its source section) |

## Banners — 17 demo blocks

**Exact MDX blob:** `7eb978d126911a64b013c178f4db66d0169fc3cc`.
**Portable guide:** [banners.md](../portable/guidelines/design-components/banners.md).
These are **source demonstrations**, not mandated production buttons or notifications.

| # | Source section | Do / avoid / reference | Demonstrated semantic props | Source author's behavioral note |
| ---: | --- | --- | --- | --- |
| 1 | Critical error/blocker | reference | kind=critical; links=Usage guidelines | (interactive example; read prose above in its source section) |
| 2 | Warning/action required | reference | kind=warning; actions=Renew plan | (interactive example; read prose above in its source section) |
| 3 | Success confirmation | reference | kind=success; dismissible; semantic icon; links=Table guidelines, Reporting data | (interactive example; read prose above in its source section) |
| 4 | Informational/feature | reference | kind=info; dismissible | (interactive example; read prose above in its source section) |
| 5 | Dismissal for informational and success banners | do | kind=success/info; dismissible; semantic icon; actions=Here; links=Table guidelines, Reporting data | include an X on success and info banners so users can clear them. |
| 6 | No dismissal for unresolved state | dont | kind=warning/critical; dismissible; actions=Renew now, Try again | include an X on warning or critical banners the user still needs to resolve. |
| 7 | Iconography | reference | visual placement/copy reference | (interactive example; read prose above in its source section) |
| 8 | Action type and singular focus | do | kind=warning/info; dismissible; actions=Renew now, Here | give a banner one action: a button to complete a task, or a link to go somewhere. |
| 9 | Guide to resolution | do | kind=warning/critical; actions=Renew now, Try again | give a banner that can’t be dismissed one button that resolves the issue. |
| 10 | Top of content area | do | visual placement/copy reference | place the banner at the top of the content it affects. |
| 11 | Maximum two banners | dont | visual placement/copy reference | show more than two banners at once. It adds too much cognitive load. |
| 12 | Priority stacking order | do | visual placement/copy reference | put the most critical banner on top when two banners are showing. |
| 13 | State status directly | reference | kind=warning; actions=Try again, Try again | (interactive example; read prose above in its source section) |
| 14 | Link problem to solution | reference | kind=critical; actions=Refresh page, Ok | (interactive example; read prose above in its source section) |
| 15 | Include specific data | reference | kind=success; dismissible; semantic icon | (interactive example; read prose above in its source section) |
| 16 | Punctuation | do | kind=info; dismissible | leave off the period for a single sentence, and use periods when there’s more than one. |
| 17 | Sentence case | do | kind=warning; actions=Try again | use sentence case in banner copy. |

## Decisions to preserve in the final HSK AI design guidelines

1. **Button component anatomy:** primary/secondary/tertiary hierarchy, icon-only neutral affordances, small visual variant **without losing tap target**, explicitly disabled state for genuinely forbidden actions, pending/loading where real, grouped actions with clear priority and distinguishable navigation links.
2. **Banner anatomy and modality:** critical/warning/success/info are different severity/state roles; a verified success may use a check-circle semantic icon. The example Phosphor glyph `checkCircleBold` is an imported icon package asset, **not a historical PNG figure**.
3. **Dismissal contract:** informational/verified-success banners can be dismissed; an unresolved blocking condition should not disappear through an X when it would conceal essential recovery or status. Do not treat this as a universal ban on safely dismissing a recoverable warning.
4. **Actions:** a banner has at most one clearly prioritized action in the professional example; button executes an action while link navigates. If source demo shows Renewal, Try again or Refresh, that is only an **example**; HSK AI must implement it only when real and safe.
5. **Placement and stack:** professional illustration uses top of affected content, at most two simultaneous banners, higher severity first; adapt to actual phone safe area/keyboard and the current learner task without hiding lesson controls.
6. **Copy:** direct state explanation; actionable recovery, meaningful verified values, sentence case, punctuation that serves readability; never optimistic or fictional payment/lesson success.
7. **Vendor styling is not authority:** extract hierarchy and visual-state details, do not transfer its JSX runtime, third-party logos, buttons, rewards, source school/teacher content or unsupported product capabilities.

## Still unresolved

The **29 demos' original rendered geometry and interaction transitions have NOT been visually rebuilt**. The professional textual requirements and exact source metadata are retained for future HSK AI-owned original examples. Close the visual parity and copyright gates before claiming this transfer package is fully equivalent or public-ready. Do not treat this document as successful PWA/Android browser tests.
