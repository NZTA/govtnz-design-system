<div class="g-radios__item<% if $errorId %>  g-form-group--error<% end_if %>">    <input<% if $hintId %> aria-describedby="{$hintId}"<% end_if %> class="g-radios__input"<% if $id %> id="{$id}"<% end_if %><% if $name %> name="{$name}"<% end_if %> type="radio"<% if $disabled %> disabled="<% if $disabled %>undefined<% end_if %>"<% end_if %><% if $readOnly %> readonly="<% if $readOnly %>undefined<% end_if %>"<% end_if %><% if $autoFocus %> autofocus="<% if $autoFocus %>undefined<% end_if %>"<% end_if %><% if $value %> value="{$value}"<% end_if %><% if $checked %> checked="<% if $checked %>undefined<% end_if %>"<% end_if %>/>    <label class="g-label g-radios__label"<% if $id %> for="{$id}"<% end_if %>>      {$label}
   </label>         <div class="g-hint g-checkboxes__hint"<% if $hintId %> id="{$hintId}"<% end_if %>>        {$hint}
     </div>     </div>