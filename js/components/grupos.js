const Grupo = (num, url) => `
    <li>
       <a class="grupo" href="${url}">Grupo ${num}</a>
    </li>`;

const Grupos = () => GRUPOS.map((item) => Grupo(item.num, item.url)).join("");
