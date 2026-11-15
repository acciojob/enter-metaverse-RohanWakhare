//your JS code here. If required.
<p id="status">Enter the Metaverse</p>

<button id="enterBtn">Enter</button>

<script>
  document.getElementById("enterBtn").addEventListener("click", function () {
    document.getElementById("status").textContent = "Entered Metaverse";
});
</script>
