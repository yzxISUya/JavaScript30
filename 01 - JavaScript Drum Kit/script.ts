function playing(e : KeyboardEvent){
    const key = document.querySelector<HTMLDivElement>(`div[data-key="${e.code}"]`);
    const audio = document.querySelector<HTMLAudioElement>(`audio[data-key="${e.code}"]`);
    if (!audio || !key) return;

    audio.play();
    key.classList.add("playing");
}

function remove(e : KeyboardEvent){
    const key = document.querySelector<HTMLDivElement>(`div[data-key="${e.code}"]`);

    key?.classList.remove("playing");
}

window.addEventListener('keydown', playing);
window.addEventListener("keyup", remove);