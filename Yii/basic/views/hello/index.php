<?php
use app\components\HelloWidget;
?>
<h1>this is a test</h1>

<?= $redis ?>
<br>
<?= HelloWidget::widget(['message' => 'Good morning']) ?>
