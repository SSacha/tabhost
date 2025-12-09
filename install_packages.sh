#!/bin/bash

# Liste des packages npm à installer
packages=(
  "axios"
  "date-fns"
  "moment"
  "react-use"
  "sass"
  "@supabase/supabase-js"
  # Ajoute ici les autres packages que tu veux installer
)

# Boucle à travers chaque package et exécute npm install
for package in "${packages[@]}"
do
  echo "Installing $package..."
  npm install "$package"
done

echo "All packages installed!"
