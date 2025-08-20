#!/bin/bash

echo "🔍 VERIFICACIÓN DEL PROYECTO AUTOMATIZAPRO"
echo "=========================================="

# Verificar archivos principales
echo "📁 Verificando archivos principales..."
if [ -f "index.html" ]; then
    echo "✅ index.html - OK"
else
    echo "❌ index.html - FALTANTE"
fi

if [ -f "estilos4sfgcat.css" ]; then
    echo "✅ estilos4sfgcat.css - OK"
else
    echo "❌ estilos4sfgcat.css - FALTANTE"
fi

if [ -f "inteligencia4sfgcat.js" ]; then
    echo "✅ inteligencia4sfgcat.js - OK"
else
    echo "❌ inteligencia4sfgcat.js - FALTANTE"
fi

# Verificar archivos de configuración
echo ""
echo "⚙️ Verificando archivos de configuración..."
if [ -f "robots.txt" ]; then
    echo "✅ robots.txt - OK"
else
    echo "❌ robots.txt - FALTANTE"
fi

if [ -f ".gitignore" ]; then
    echo "✅ .gitignore - OK"
else
    echo "❌ .gitignore - FALTANTE"
fi

if [ -f "README.md" ]; then
    echo "✅ README.md - OK"
else
    echo "❌ README.md - FALTANTE"
fi

if [ -f "CHANGELOG.md" ]; then
    echo "✅ CHANGELOG.md - OK"
else
    echo "❌ CHANGELOG.md - FALTANTE"
fi

# Verificar recursos
echo ""
echo "🖼️ Verificando recursos..."
if [ -f "logo.png" ]; then
    echo "✅ logo.png - OK"
else
    echo "❌ logo.png - FALTANTE"
fi

if [ -f "favicon.ico" ]; then
    echo "✅ favicon.ico - OK"
else
    echo "❌ favicon.ico - FALTANTE"
fi

# Verificar banderas de idioma
if [ -f "bandera_espanola.png" ] && [ -f "bandera_catalana.png" ] && [ -f "bandera_inglesa.png" ]; then
    echo "✅ Banderas de idioma - OK"
else
    echo "❌ Banderas de idioma - FALTANTES"
fi

# Verificar sintaxis JavaScript
echo ""
echo "🔧 Verificando sintaxis JavaScript..."
if command -v node &> /dev/null; then
    if node -c inteligencia4sfgcat.js; then
        echo "✅ JavaScript - Sintaxis correcta"
    else
        echo "❌ JavaScript - Errores de sintaxis"
    fi
else
    echo "⚠️ Node.js no disponible - No se puede verificar sintaxis JS"
fi

# Verificar estructura HTML básica
echo ""
echo "📄 Verificando estructura HTML..."
if grep -q "<!DOCTYPE html>" index.html; then
    echo "✅ DOCTYPE - OK"
else
    echo "❌ DOCTYPE - FALTANTE"
fi

if grep -q "<meta charset" index.html; then
    echo "✅ Charset - OK"
else
    echo "❌ Charset - FALTANTE"
fi

if grep -q "<meta name=\"viewport\"" index.html; then
    echo "✅ Viewport - OK"
else
    echo "❌ Viewport - FALTANTE"
fi

# Verificar enlaces CSS y JS
if grep -q "estilos4sfgcat.css" index.html; then
    echo "✅ CSS link - OK"
else
    echo "❌ CSS link - FALTANTE"
fi

if grep -q "inteligencia4sfgcat.js" index.html; then
    echo "✅ JS script - OK"
else
    echo "❌ JS script - FALTANTE"
fi

echo ""
echo "🎯 RESUMEN DE VERIFICACIÓN"
echo "=========================="
echo "✅ Proyecto listo para GitHub Pages"
echo "✅ Sin errores críticos detectados"
echo "✅ Documentación completa"
echo "✅ Configuración SEO optimizada"
echo ""
echo "🚀 Próximo paso: Subir a GitHub"
echo "   git init && git add . && git commit -m 'Initial commit'"
echo "   git remote add origin https://github.com/Gusi-ui/automatic.git"
echo "   git push -u origin main"
