export const css = `
.accordion-item {
    display: grid;
    /* gap: 24px; */
    background-color: var(--color-white);
}

.accordion-btn {
    display: flex;
    justify-content: space-between;
    border: none;
    gap: 24px;
    align-items: center;
    background-color: transparent;
    text-align: start;
    font-size: var(--fs-2);
    line-height: var(--lh-2);
    font-family: "WorkSansSemyBold";
    cursor: pointer;
    width: 100%;
    padding: 0;
    overflow: hidden;
    z-index: 10;
}

.accordion-panel {
    display: grid;
    grid-template-rows: 1fr;
    transition:
        all 0.3s;
    overflow: hidden;
    margin-block-start: 1.5rem;
}

.accordion-item:not(:last-child) {
    border-bottom: 1px solid var(--color-purple-100);
}

.accordion-item:not(:last-child) .accordion-panel {
    margin-block-end: 1.5rem;
}

.hidden {
    grid-template-rows: 0fr;
    margin-block-start: 0;
}

.accordion-content {
    min-height: 0;
    margin: 0;
}
`;
