-- Supabase → SQL Editor → New query → Run once

create table if not exists guide_activations (
  key_hash text primary key,
  device_id text not null,
  activated_at timestamptz not null default now()
);

alter table guide_activations enable row level security;

create or replace function activate_guide_key(p_key_hash text, p_device_id text)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  existing guide_activations%rowtype;
begin
  if p_key_hash is null or length(p_key_hash) < 32 then
    return json_build_object('ok', false, 'error', 'Invalid key hash');
  end if;
  if p_device_id is null or length(p_device_id) < 8 then
    return json_build_object('ok', false, 'error', 'Invalid device id');
  end if;

  select * into existing from guide_activations where key_hash = p_key_hash;

  if found then
    if existing.device_id = p_device_id then
      return json_build_object('ok', true, 'status', 'already');
    end if;
    return json_build_object('ok', false, 'error', 'Этот ключ уже активирован на другом устройстве');
  end if;

  insert into guide_activations (key_hash, device_id) values (p_key_hash, p_device_id);
  return json_build_object('ok', true, 'status', 'activated');
exception
  when unique_violation then
    return json_build_object('ok', false, 'error', 'Этот ключ уже активирован на другом устройстве');
end;
$$;

revoke all on function activate_guide_key(text, text) from public;
grant execute on function activate_guide_key(text, text) to anon, authenticated;
