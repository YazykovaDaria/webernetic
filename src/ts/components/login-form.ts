import goModal from "./modal";

const OPEN_TRIGGER_SELECTOR = ".js-login";

const triggerEl: HTMLElement | null = document.querySelector(
    OPEN_TRIGGER_SELECTOR
);

const template = `<form action="#" class="login">
<h2 class="subtitle login__title">Войти в систему</h2>
<div class="login__group">
  <input type="text" class="input" placeholder="Email/Телефон"></input>
  <input type="text" class="input" placeholder="Пароль"></input>
</div>
<label class="checkbox login__checkbox">
  <input type="checkbox">
  <span>Запомнить пароль</span>
</label>
<a href="#" class="login__subtitle">Восстановить</a>
<div class="login__group">
  <button type="submit" class="btn-main">Войти</button>
  <a href="#" class="btn-side">Зарегестрироваться</a>
</div>
</form>`;

const openLoginForm = () => {
    if (!triggerEl) return;

    triggerEl.addEventListener("click", () => goModal(template));
};

export default openLoginForm;
