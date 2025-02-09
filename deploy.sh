#!/usr/bin/env bash

set -eux

application="wedding"
paths="program travel faq"
remote_www_dir="www"
server="magjac.com"

if [[ $# != 0 ]]; then
  if [[ $1 = "--test" ]]; then
    remote_www_dir="www-test"
  else
    echo "Error: Uknown option: $1" 1>&2
    echo "Usage: $0 [--test]" 1>&2
    exit 1
  fi
fi
remote_dir="${remote_www_dir}/${application}"

# npm install
npm run build

scp -rp -P 7822 build/* ${server}:${remote_dir}
scp -rp -P 7822 backend/*.py ${server}:${remote_dir}
scp -rp -P 7822 backend/requirements.txt ${server}:${remote_dir}

ssh -p 7822 ${server} "python3 -m venv ~/venvs/${application}"
ssh -p 7822 ${server} "
  source ~/venvs/${application}/bin/activate &&
  pip install -r ${remote_dir}/requirements.txt
"
for path in $paths; do
  ssh -p 7822 ${server} "ln -nsf . ${remote_dir}/${path}"
done

# Do this manually once
# sudo ln -s /home/magjac/www/wedding /var/www/html

ssh -p 7822 ${server} systemctl --user daemon-reload
ssh -p 7822 ${server} systemctl --user enable ${application}
ssh -p 7822 ${server} systemctl --user restart ${application}
