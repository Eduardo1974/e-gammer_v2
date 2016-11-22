package br.gov.sp.fatec.egammer.domain.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.gov.sp.fatec.egammer.domain.PersistenceService;

@Service("usuarioService")
public class UsuarioService implements PersistenceService<Usuario> {

	@Autowired
	private UsuarioRepository repository;

	@Override
	public Usuario salvar(final Usuario obj) {
		return this.repository.save(obj);
	}

	@Override
	public void excluir(final Long id) {
		this.repository.delete(id);
	}

	@Override
	public Usuario buscarPorId(final Long id) {
		return this.repository.findByCodigo(id);
	}

	public Usuario buscarPorLoginESenha(final String login, final String senha) {
		return this.repository.buscarPorLoginESenha(login, senha);
	}

}
