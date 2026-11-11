"use strict";
const app = document.querySelector("#app");
if (app === null) {
    throw new Error("#appが見つからない");
}
window.addEventListener("hashchange", () => {
    const page = location.hash;
    console.log(page);
    console.log(location.hash);
    if (page === "#detail") {
        app.innerHTML = `
            <h1>詳細ページ</h1>
            <p>この文章はTypeScriptから追加した。</p>
            <nav>
                <a href="#compare">比較</a>
                <a href="#detail">詳細</a>
            </nav>
        `;
    }
    else if (page === "#compare") {
        app.innerHTML = `
            <h1>比較ページ</h1>
            <p>比較のページです。</p>
            <nav>
                <a href="#compare">比較</a>
                <a href="#detail">詳細</a>
            </nav>
        `;
    }
});
