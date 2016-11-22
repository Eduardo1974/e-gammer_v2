package br.gov.sp.fatec.egammer.domain.venda;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("pedidoService")
public class PedidoServiceImpl implements PedidoService{
	
	@Autowired
	private PedidoRepository repository;
	
	@Autowired
	private ItemPedidoReposiory ItemPedRepo;
	
	@Override
	@Transactional
	public Pedido salvar(final Pedido obj) {
		this.repository.save(obj);
		for(ItemPedido it:obj.getItensPedido()){
			it.setPedido(obj);
			this.ItemPedRepo.save(it);
		}
		return obj;
	}

	@Override
	public void excluir(final Long id) {
		this.repository.delete(id);
	}

	@Override
	public Pedido buscarPorId(final Long id) {
		return this.repository.findByCodigo(id);
	}

	public List<Pedido> buscaTodosPedidosCliente(final Long cliente){
		return this.repository.buscaTodosPedidosCliente(cliente);
	}

	public void setRepository(PedidoRepository repository) {
		this.repository = repository;
	}

	public void setItemPedRepo(ItemPedidoReposiory itemPedRepo) {
		ItemPedRepo = itemPedRepo;
	}

}
