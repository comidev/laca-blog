const getNumSemana = (numSemana) => {
    if (numSemana < 4) {
        return numSemana;
    }
    const newNumSemana = numSemana + 1;

    if (numSemana === 4) {
        return `${numSemana} / ${newNumSemana}`;
    } else {
        return `${newNumSemana}`;
    }
};

const Trabajo = (index, clases, tareas) => {
    const numSemana = index + 1;

    return `
    <article class="trabajo">
        <div class="column01">
            <span>${getNumSemana(numSemana)}</span>
        </div>
        <div class="column02">
            <p>${SILABO[index].tema}</p>
            <ul>
                ${SILABO[index].subtemas.map((item) => `<li>${item}</li>`).join("")}
            </ul>
        </div>
        <ul class="column03 list-link">
            ${clases
                .map(
                    (item) => `
                    <li>
                        <a href="${item.url}" target="_blank" class="trabajo__link ${item.type}">${item.name}</a>
                    </li>`
                )
                .join("")}
        </ul>
        <ul class="column04 list-link">
            ${tareas
                .map(
                    (item) => `
                        <li>
                            <a href="${item.url}" target="_blank" class="trabajo__link ${item.type}">${item.name}</a>
                        </li>`
                )
                .join("")}
        </ul>
    </article>
    `;
};

const Trabajos = () =>
    TRABAJOS.map((item, index) => Trabajo(index, item.clases, item.tareas)).join("");
