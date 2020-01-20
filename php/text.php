
<?php $bankAccount = ''; ?>
<section class="excf <?= $bankAccount != ''?'':'hide' ?> excf_2" data-model="old">
<p class="title">We will transfer the cash to this account</p>

<div class="input_wrap">
    <input type="text" name="account" value="<?= $bankAccount['first_name'].'+'.$bankAccount['last_name'].'('.$bankAccount['bank_name'].')' ?>" disabled="disabled">
</div>

<p class="change_account">Change account</p>

<input type="submit" name="submit" class="submit btn_1" value="Sure">
</section>