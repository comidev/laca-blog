const createNum = (num) => (num < 10 ? `0${num}` : num);

const Grupo = (num, url) => `
    <li>
       <a class="grupo" target="_blank" href="${url}">Grupo ${createNum(num)}</a>
    </li>`;

const Grupos = () => GRUPOS.map((item) => Grupo(item.num, item.url)).join("");
