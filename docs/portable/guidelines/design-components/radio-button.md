> **HSK AI professional guideline — standalone internal review draft.** Source `__docs__/design-components/radio-button.mdx`, Git blob `6da9f2f170efa37d221e6fc5b71241c98b4f5c2f`; 9 historic figures, 0 MDX interactive demos. Historical binaries/vendor runtime omitted; source prose licensing, picture equivalence and full rights-cleared transfer still require review. No live HSK AI feature is implied.

> **Historical figure 1 — source reference only (not transferred):** Radio button. Source asset: `./assets/radio-button/radio-button.png`.

# Radio button

> **HSK AI adaptation:** Use HSK AI's actually supported level, course track and other single-choice controls. The reference figures teach radio behavior, not new product options. Keep the professional rules about a small exposed option set, non-preselected consent, visible disabled state and no nested radio groups.

*Component role: Mutually exclusive selection*

A mutually exclusive selection mechanism used to allow users to choose only one option from a small, visible set of choices.

## Recommended: When to use

The choice to use radio buttons is determined by the need to present a small, visible set of mutually exclusive options where only one can be selected at a time.

| Use when | Example use |
| --- | --- |
| The selection is mutually exclusive — only one item can be chosen | Selecting one of the **available HSK AI levels or course tracks** in an existing onboarding choice; use only supported options. |
| The options are few enough to compare side by side without opening a menu | Selecting one actual mutually exclusive study preference in a flow that provides those options. |

## Avoid: When NOT to use

| Don't use when | Recommended alternative | Rationale |
| --- | --- | --- |
| The user needs to select multiple items (A, B, and C) | Checkbox group | Radio buttons cannot be used when more than one item can be chosen at a time. |
| The list contains more than 8 options | Single-select dropdown | Beyond 8 options, scanning an exposed list costs more than opening a menu. |
| It's a simple, global on/off constraint that affects the entire view | Toggle | For a simple, global ON/OFF constraint, a toggle is visually clearer. |

## Exposed or dropdown

- 8 or fewer — exposed by default.
- More than 8 — dropdown.
- Top filter bar — always a dropdown, regardless of count.

A dropdown is also acceptable at eight or fewer outside the filter bar — a settings page or a long form — where the control is one field among many and the user is setting a value they already know. Expose when seeing the options is part of the decision. Collapse when the user arrives knowing the answer and the surrounding form needs to stay scannable.

> **Historical figure 2 — source reference only (not transferred):** A settings form where a long list of states is contained in a single-select dropdown showing “California”. Source asset: `./assets/radio-button/dropdown-alt.png`.

### Top filter bar

Horizontal space is shared across several controls, so exposed options would break the layout.

> **Historical figure 3 — source reference only (not transferred):** A top filter bar where course options are contained in a single-select dropdown — use a single-select dropdown for radio options in the top filter bar.. Type: do. Source asset: `./assets/radio-button/filter-bar-do.png`.

> **Historical figure 4 — source reference only (not transferred):** A top filter bar with radio options exposed directly next to the filter dropdowns — expose radio options directly in the top filter bar.. Type: dont. Source asset: `./assets/radio-button/filter-bar-dont.png`.

## States

### Default selection

Pre-select one option so the group is never in an ambiguous or unvalidated state.

The exception is a choice that must be deliberate — consent, a survey answer, or anything where "the user didn’t answer" is meaningful information. Pre-selecting makes it impossible to tell a real choice from an untouched form. In those cases, start with no option selected and treat the group as required.

> **Historical figure 5 — source reference only (not transferred):** A radio group of four options with the first option pre-selected. Source asset: `./assets/radio-button/default-selection.png`.

### Disabled

Used when a prerequisite action has not been fulfilled. The field is grayed out and non-interactive. Once the dependency is met, it no longer displays as disabled. Do not use disabled when read-only is more appropriate — disabled implies unavailability, not restriction.

> **Historical figure 6 — source reference only (not transferred):** A single radio option shown grayed out in its disabled state. Source asset: `./assets/radio-button/disabled.png`.

## Interaction

### Immediate, single selection

Clicking any option immediately selects it and deselects the previously chosen option within the group.

> **Historical figure 7 — source reference only (not transferred):** Two side-by-side radio groups showing selection moving from the first option to the second when clicked. Source asset: `./assets/radio-button/immediate-selection.png`.

### Returning to no selection

Once an option is selected, the user cannot return to a zero-selected state. Radio buttons have no mechanism for deselection — choosing one option only moves the selection elsewhere. If "none" is a legitimate answer, provide it as an explicit option rather than expecting the user to clear the group.

> **Historical figure 8 — source reference only (not transferred):** A radio group — Voice 1, Voice 2, and Voice 3, each with a play button — with no option selected and no explicit "None" option — omit a "None" option when "none" is a valid answer. Type: dont. Source asset: `./assets/radio-button/no-selection.png`.

### Avoid nesting

Do not nest radio buttons within one another, as this creates complex dependencies and severely damages clarity.

> **Historical figure 9 — source reference only (not transferred):** A radio group with two options nested and indented beneath a parent option — nest radio buttons within one another.. Type: dont. Source asset: `./assets/radio-button/avoid-nesting.png`.
