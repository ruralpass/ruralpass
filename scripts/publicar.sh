#!/usr/bin/env bash
set -euo pipefail

PRIMARY="\033[38;2;9;82;86m"
SECONDARY="\033[38;2;47;128;76m"
ACCENT="\033[38;2;255;193;7m"
MUTED="\033[38;2;120;144;156m"
RESET="\033[0m"
BOLD="\033[1m"
DIM="\033[2m"

clear

draw_frame() {
  local content="$1"
  printf "${PRIMARY}╔══════════════════════════════════════════════════════════════╗${RESET}\n"
  printf "${PRIMARY}║${RESET} %-58s ${PRIMARY}║${RESET}\n" "${content}"
  printf "${PRIMARY}╚══════════════════════════════════════════════════════════════╝${RESET}\n"
}

print_banner() {
  cat <<EOF
${SECONDARY}${BOLD}    ____                    _ _ ____                                 ${RESET}
${SECONDARY}${BOLD}   |  _ \\ ___ _ __ ___  __| | |  _ \\ __ _ _ __ ___  ___  ___        ${RESET}
${SECONDARY}${BOLD}   | |_) / _ \\ '__/ _ \\ / _` | | |_) / _` | '__/ _ \\ __|/ _ \\       ${RESET}
${SECONDARY}${BOLD}   |  _ <  __/ | |  __/ (_| | |  __/ (_| | | |  __/\\__ \\  __/       ${RESET}
${SECONDARY}${BOLD}   |_| \\___|_|  \\___|\\__,_|_|_|   \\__,_|_|  \\___||___/\\___|       ${RESET}
${ACCENT}        🚀 Panel de Publicación Oficial RuralPass                            ${RESET}
${PRIMARY}────────────────────────────────────────────────────────────────────────${RESET}

EOF
}

print_section_title() {
  printf "${PRIMARY}${BOLD}➤ %s${RESET}\n" "$1"
}

require_command() {
  local cmd="$1"
  if ! command -v "$cmd" >/dev/null 2>&1; then
    printf "${ACCENT}✖ Falta el comando '${cmd}'. Instálalo y vuelve a intentarlo.${RESET}\n"
    exit 1
  fi
}

print_banner

draw_frame "Validando entorno Git..."
require_command git

if ! git rev-parse --git-dir >/dev/null 2>&1; then
  printf "${ACCENT}✖ Este script debe ejecutarse dentro de un repositorio Git.${RESET}\n"
  exit 1
fi

branch="$(git rev-parse --abbrev-ref HEAD)"
remote_url="$(git remote get-url origin 2>/dev/null || echo "(sin remoto)")"
target_repo="github.com/ruralpass/ruralpass"

print_section_title "Contexto actual"
printf "${MUTED}   Rama activa:${RESET} ${BOLD}%s${RESET}\n" "$branch"
printf "${MUTED}   Remoto origin:${RESET} ${BOLD}%s${RESET}\n" "$remote_url"

if [[ "$remote_url" != *"${target_repo}"* ]]; then
  printf "${ACCENT}⚠ Advertencia:${RESET} el remoto 'origin' no apunta a ${target_repo}.\n"
  printf "    Revisa tu configuración antes de continuar.\n\n"
fi

changes="$(git status --short)"

if [[ -z "$changes" ]]; then
  draw_frame "No hay cambios pendientes. Nada que publicar."
  exit 0
fi

print_section_title "Cambios detectados"
printf "${DIM}%s${RESET}\n\n" "$changes"

read -r -p "${PRIMARY}${BOLD}¿Deseas continuar con la publicación? (s/N): ${RESET}" confirm
confirm=${confirm:-N}
if [[ ! $confirm =~ ^[sS]$ ]]; then
  draw_frame "Publicación cancelada por el usuario."
  exit 0
fi

print_section_title "Preparando commit"
read -r -p "${PRIMARY}Ingresa el mensaje de commit:${RESET} " commit_message
if [[ -z "${commit_message// }" ]]; then
  commit_message="chore: sincroniza cambios $(date +"%Y-%m-%d %H:%M")"
  printf "${MUTED}→ Usando mensaje por defecto:${RESET} %s\n" "$commit_message"
fi

printf "${MUTED}→ Añadiendo cambios...${RESET}\n"
git add -A

if git diff --cached --quiet; then
  draw_frame "No se detectaron cambios para commitear tras el git add."
  exit 0
fi

git commit -m "$commit_message"
printf "${SECONDARY}✔ Commit creado con éxito.${RESET}\n\n"

print_section_title "Publicando a remoto"
printf "${MUTED}→ Ejecutando git push origin %s...${RESET}\n" "$branch"
git push origin "$branch"

printf "\n${SECONDARY}${BOLD}╔══════════════════════════════════════════════════════════════╗${RESET}\n"
printf "${SECONDARY}${BOLD}║  🎉  Publicación completada. Tus cambios ya están en remoto.  ║${RESET}\n"
printf "${SECONDARY}${BOLD}╚══════════════════════════════════════════════════════════════╝${RESET}\n"
printf "${ACCENT}    Gracias por mantener RuralPass actualizado.${RESET}\n"
