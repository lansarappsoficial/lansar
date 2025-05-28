<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Botão WhatsApp Flutuante</title>
  <style>
    .whatsapp-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #25D366;
      color: white;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      text-decoration: none;
      transition: transform 0.3s ease;
      z-index: 1000;
    }

    .whatsapp-button:hover {
      transform: scale(1.1);
    }

    .whatsapp-icon {
      width: 30px;
      height: 30px;
    }
  </style>
</head>
<body>

  <!-- Botão flutuante -->
  <a
    href="https://wa.me/5548987831733"
    class="whatsapp-button"
    target="_blank"
    aria-label="Converse conosco no WhatsApp"
  >
    <img
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
      alt="WhatsApp"
      class="whatsapp-icon"
    />
  </a>

</body>
</html>
