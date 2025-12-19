<?php
require "../php/db.php";
$result = $conn->query("SELECT * FROM reservations ORDER BY created_at DESC");
?>

<h2>Client Reservations</h2>

<table border="1" cellpadding="10">
<tr>
  <th>Name</th>
  <th>Email</th>
  <th>Date</th>
  <th>Time</th>
</tr>

<?php while ($row = $result->fetch_assoc()): ?>
<tr>
  <td><?= $row["name"] ?></td>
  <td><?= $row["email"] ?></td>
  <td><?= $row["date"] ?></td>
  <td><?= $row["created_at"] ?></td>
</tr>
<?php endwhile; ?>
</table>
